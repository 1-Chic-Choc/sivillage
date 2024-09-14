import {
  CheckboxFieldData,
  InputFieldData,
} from "@/components/forms/form-interface";
import FormSection from "@/components/forms/FormSection";
import SeperatedDateInput from "@/components/inputs/SeperatedDateInput";
import AddressInput from "@/components/inputs/AddressInput";

const inputFieldDatas: InputFieldData[] = [
  {
    label: "생년월일",
    name: "birth",
    inputElement: SeperatedDateInput,
  },
  {
    label: "주소",
    name: "address",
    inputElement: AddressInput,
    placeholder: "주소를 입력해주세요.",
    description: "회원 및 배송지 주소로 설정됩니다.",
  },
];

const checkboxFieldDatas: CheckboxFieldData[] = [
  {
    name: "marketingAgreements",
    id: "personalInfo",
    label: (
      <>
        마케팅 목적의 개인정보 수집 및 이용동의
        <span className="text-amber-600">(선택)</span>
      </>
    ),
    description: (
      <>
        <strong className="underline">
          수신 미동의 시 신세계인터내셔날에서 진행하는 이벤트 및 할인,
          인기/신상품 등의 정보를 받아보실 수 없으며, 이벤트 및 추가 혜택 제공
          대상에서 제외될 수 있습니다.
        </strong>
        <br />- 회원가입/구매/회사의 주요정책 관련 정보는 수신동의와 관계없이
        모든 회원에게 발송됩니다.
      </>
    ),
  },
  {
    name: "marketingAgreements",
    id: "전체수신",
    label: <>전체수신</>,
  },
  {
    name: "marketingAgreements",
    id: "SMS",
    label: <>SMS</>,
  },
  {
    name: "marketingAgreements",
    id: "E-mail",
    label: <>E-mail</>,
  },
  {
    name: "marketingAgreements",
    id: "DM(카탈로그)",
    label: <>DM(카탈로그)</>,
  },
  {
    name: "marketingAgreements",
    id: "CALL",
    label: <>CALL</>,
  },
];

export default function OptionalField({ form }: any) {
  return <FormSection {...{ form, inputFieldDatas, checkboxFieldDatas }} />;
}
