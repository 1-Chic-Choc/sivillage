import { CheckboxFieldData } from "@/components/forms/form-interface";
import FormSection from "@/components/forms/FormSection";

const checkboxFieldDatas: CheckboxFieldData[] = [
  {
    name: "signUpAgreements",
    id: "all",
    label: <>모두 동의합니다.</>,
    description: (
      <>
        전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 선택항목에
        대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.
      </>
    ),
  },
  {
    name: "signUpAgreements",
    id: "website",
    label: (
      <>
        신세계인터내셔날 웹사이트 이용약관
        <span className="text-amber-600">(필수)</span>
      </>
    ),
  },
  {
    name: "signUpAgreements",

    id: "member",
    label: (
      <>
        신세계인터내셔날 통합회원 이용약관
        <span className="text-amber-600">(필수)</span>
      </>
    ),
  },
  {
    name: "signUpAgreements",
    id: "personalInfo",
    label: (
      <>
        서비스 제공을 위한 개인정보 수집 및 이용동의
        <span className="text-amber-600">(필수)</span>
      </>
    ),
  },
  {
    name: "signUpAgreements",
    id: "membership",
    label: (
      <>
        통합 멤버십 서비스 제공을 위한 신세계톰보이 정보 제공 동의
        <span className="text-amber-600">(필수)</span>
      </>
    ),
  },
];

export default function AgreementField({ form }: any) {
  return <FormSection {...{ form, checkboxFieldDatas }} />;
}
