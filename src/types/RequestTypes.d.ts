export interface SignUpResquestType {
  email: string;
  password: string;
  name: string;
  phone: string;
  postalCode: string;
  address: string;
  birth: string;
  terms: {
    termsId: number;
    isAgree: boolean;
  }[];
  oauthProvider?: string;
  oauthId?: string;
  oauthEmail?: string;
}

// auth

export type SignInRequestType = Record<
  "email" | "password" | "autoSignIn",
  string
>;

// oauth

export type UserInfoRequestType = Record<
  "oauthProvider" | "oauthId" | "oauthEmail",
  string
>;
