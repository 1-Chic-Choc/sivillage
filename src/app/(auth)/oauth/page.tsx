import OauthSignInButtonGroup from "@/components/molecule/button/OauthSignInButtonGroup";
import BandShapeBanner from "@/components/template/page/main/reuable/BandShapeBanner";
import OauthSignInLink from "@/components/template/page/oauth/OauthSignInLink";
import OauthSignUpLink from "@/components/template/page/oauth/OauthSignUpLink";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface pageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function page({ searchParams }: pageProps) {
  const oauthProvider = searchParams["oauthProvider"];
  return (
    <main>
      <div>
        <div className={cn("px-[24px] py-[96px]")}>
          <h1 className={cn("mb-[24px]", "text-[24px] font-[700]")}>
            [ {oauthProvider} ] 연동된 계정이 없습니다
          </h1>

          <div
            className={cn(
              "py-[12px] border-[2px] mb-[12px]",
              "text-[16px] font-[500] text-center",
              "text-[#131922]",
              // "text-white bg-black",
            )}
          >
            <OauthSignInLink>로그인 하여 기존 계정과 연동하기</OauthSignInLink>
          </div>

          <div
            className={cn(
              "py-[12px] border-[2px]",
              "text-[16px] font-[500] text-center",
              // "text-[#131922]",
              "text-white bg-black",
            )}
          >
            <OauthSignUpLink>새로 가입하기</OauthSignUpLink>
          </div>
        </div>
        <BandShapeBanner />
      </div>
    </main>
  );
}
