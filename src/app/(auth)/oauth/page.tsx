import OauthSignInLink from "@/components/template/page/oauth/OauthSignInLink";
import OauthSignUpLink from "@/components/template/page/oauth/OauthSignUpLink";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <h1>ㅠㅠ 연동된 계정이 엄서요</h1>
      <div>
        <OauthSignInLink>로그인 하여 기존 계정과 연동하기</OauthSignInLink>
      </div>
      <div>
        <OauthSignUpLink>새로 가입하기</OauthSignUpLink>
      </div>
    </main>
  );
}
