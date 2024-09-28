import { signInAction } from "@/action/authAction";
import { oauthUserInfoAction } from "@/action/oauthAction";
import { CommonResType, UserUUID } from "@/types/ResponseTypes";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

interface authResType {
  uuid: string;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
        autoSignIn: { label: "autoSignIn", type: "boolean" },
        oauthProvider: { label: "oauthProvider", type: "string" },
        oauthId: { label: "oauthId", type: "string" },
        oauthEmail: { label: "oauthEmail", type: "string" },
      },

      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        if (!["kakao", "naver"].includes(credentials.oauthProvider)) {
          credentials.oauthProvider = "";
          credentials.oauthId = "";
          credentials.oauthEmail = "";
        }

        try {
          const res = await signInAction(credentials);
          const { result } = (await res.json()) as CommonResType<UserUUID>;
          console.log(result);
          return {
            uuid: result.uuid,
            email: credentials.email,
            accessToken: res.headers.get("authorization"),
            // refreshToken: res.headers.get("x-refresh-token"),
          };
        } catch (error) {
          console.error("error", error);
        }
        return null;
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (profile && account) {
        try {
          const oauthData = {
            oauthProvider: account.provider,
            oauthId: account.providerAccountId,
            oauthEmail: user.email!,
          };

          const res = await oauthUserInfoAction(oauthData);
          const data = (await res.json()) as CommonResType<UserUUID>;
          console.log(data);
          if (data.httpStatus === "OK") {
            user.uuid = data.result.uuid;
            user.email = user.email;
            user.accessToken = res.headers.get("authorization") || "";
            // user.refreshToken = res.headers.get("x-refresh-token") || "";

            return true;
          } else {
            return `/oauth?oauthProvider=${account.provider}&oauthEmail=${user.email}&oauthId=${account.providerAccountId}`;
          }
        } catch (error) {
          console.error("error", error);
          return "/sign-up";
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: "/sign-in",
    error: "/error",
  },
};
