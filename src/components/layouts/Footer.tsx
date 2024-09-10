import ArrowDownIcon from "../icons/ArrowDownIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import InstarIcon from "../icons/InstarIcon";
import FacebookIcon from "../icons/FacebookIcon";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col w-full h-[56px] px-5">
      <ul className="flex justify-between">
        <li>ABOUT</li>
        <li>회사소개</li>
        <li>매장안내</li>
        <li>고객센터</li>
        <li>채팅상담</li>
      </ul>
      <div className="flex justify-between py-3 font-bold">
        <p>(주)신세계인터내셔날 사업자 정보</p>
        <ArrowDownIcon></ArrowDownIcon>
      </div>
      <div className="text-sm py-4">신세계info/arrowdown을 클릭시 나오게</div>
      <div className="flex justify-start text-sm py-3">
        <p className="pr-6">
          <Link href="#">사업자정보확인</Link>
        </p>
        <p>
          <Link href="#">에스크로서비스가입확인</Link>
        </p>
      </div>
      <hr></hr>
      <ul className="text-sm py-3 flex justify-start">
        <li className="pr-4">개인정보처리방침</li>
        <li className="pr-4">이용약관</li>
        <li>PC 버전보기</li>
      </ul>
      <div className="flex justify-start">
        <FacebookIcon></FacebookIcon>
        <InstarIcon></InstarIcon>
        <YoutubeIcon></YoutubeIcon>
      </div>
      <div className="text-sm pt-3">
        Ⓒ 2020 SHINSEGAE INTERNATIONAL ALL RIGHT RESERVED
      </div>
    </footer>
  );
}

export default Footer;
