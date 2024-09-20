import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import FacebookIcon from "@/icons/Footer/FacebookIcon";
import InstagramIcon from "@/icons/Footer/InstagramIcon";
import YoutubeIcon from "@/icons/Footer/YoutubeIcon";

interface LinkData {
  children: React.ReactNode;
  href: string;
}

const navItems: LinkData[] = [
  { children: "ABOUT", href: "/" },
  { children: "회사소개", href: "/" },
  { children: "매장안내", href: "/" },
  { children: "고객센터", href: "/" },
  { children: "채팅상담", href: "/" },
];

const listItems: LinkData[] = [
  { children: <b>개인정보처리방침</b>, href: "/" },
  { children: "이용약관", href: "/" },
  { children: "PC 버전보기", href: "/" },
];

const snsItems: LinkData[] = [
  { children: <FacebookIcon />, href: "/" },
  { children: <InstagramIcon />, href: "/" },
  { children: <YoutubeIcon />, href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] border-[#F8F8F8] border-t-[8px]">
      <nav
        className={cn(
          "px-[24px] h-[50px] bg-white",
          "flex justify-between items-center",
        )}
      >
        {navItems.map(({ children, href }, index) => (
          <Link
            key={index}
            href={href}
            className="text-[14px] text-[#404040] font-[400] leading-[normal]"
          >
            {children}
          </Link>
        ))}
      </nav>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={cn(
              "px-[24px] pt-[16px] pb-[0px]",
              "text-[16px] text-[#131822] font-[700] leading-[52px] trakcing-[0.1px]",
            )}
          >
            ㈜신세계인터내셔날 사업자 정보
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "px-[24px] pt-[3px] pb-[26px]",
              "text-[12px] text-[#787878] font-[400] tracking-[-0.06px] leading-[20px]",
            )}
          >
            서울특별시 강남구 도산대로 449 (청담동)
            <br />
            대표이사 : 윌리엄김
            <br />
            사업자등록번호 : 201-81-53657
            <br />
            통신판매업 신고번호 : 강남-13797
            <br />
            개인정보보호책임자 : 임홍철
            <br />
            호스팅사업자 : ㈜신세계아이앤씨
            <br />
            고객센터(유료) : 1644-4490
            <br />
            이메일 :{" "}
            <Link href="mailTo:siv_cs@sikorea.co.kr">siv_cs@sikorea.co.kr</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <ul className="px-[24px] py-[14px] h-[48px] flex items-center leading-[normal]">
        {listItems.map(({ children, href }, index) => (
          <li key={index}>
            <Link
              href={href}
              className="text-[12px] text-[#787878] font-[500] leading-[2px] pr-[20px] tracking-[normal]"
            >
              {children}
            </Link>
          </li>
        ))}
      </ul>
      <div className="px-[24px] leading-[normal]">
        {snsItems.map(({ children, href }, index) => (
          <Link key={index} href={href} className="mr-[6px] inline-block">
            {children}
          </Link>
        ))}
      </div>
      <div
        className={cn(
          "px-[24px] pt-[16px] pb-[136px]",
          "text-[12px] text-[#A0A0A0] font-[400] leading-[18px] tracking-[-0.06px]",
        )}
      >
        Ⓒ 2020 SHINSEGAE INTERNATIONAL. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
