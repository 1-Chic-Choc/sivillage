import InputFormField, { InputFormFieldProps } from "../InputFormField";
import CheckboxFormField, {
  CheckboxFormFieldProps,
} from "../CheckboxFormField";
import SeperatedDateInput from "@/components/inputs/SeperatedDateInput";
import AddressInput from "@/components/inputs/AddressInput";

const inputFields: Omit<InputFormFieldProps, "form">[] = [
  {
    name: "birth",
    className: "flex flex-col gap-[5px]",
    label: { children: "생년월일" },
    input: {
      element: SeperatedDateInput,
    },
  },
  {
    name: "address",
    label: { children: "주소" },
    className: "space-y-0 flex flex-col gap-[13px]",
    input: {
      element: AddressInput,
      placeholder: "주소를 입력해주세요.",
    },
    description: {
      children: "회원 및 배송지 주소로 설정됩니다.",
      className: "relative top-[3px]",
    },
  },
];

const marketingAgreement: Omit<CheckboxFormFieldProps, "form"> = {
  name: "marketingAgreement",
  items: [
    {
      id: "marketingAgreement",
      className: "flex flex-col gap-[5px]",
      label: {
        children: (
          <>
            마케팅 목적의 개인정보 수집 및 이용동의
            <span className="text-amber-600">(선택)</span>
          </>
        ),
      },
      description: {
        className: "text-[14px] leading-[20px]",
        children: (
          <>
            <span className="block underline font-[700] text-[#404040] text-wrap tracking-[normal] break-all">
              수신 미동의 시 신세계인터내셔날에서 진행하는 이벤트 및 할인,
              인기/신상품 등의 정보를 받아보실 수 없으며, 이벤트 및 추가 혜택
              제공 대상에서 제외될 수 있습니다.
            </span>

            <span className="block font-[400] text-[12px] text-[#787878] text-wrap leading-[18px] mt-[8px] pl-[8px] tracking-[-0.3px]">
              회원가입/구매/회사의 주요정책 관련 정보는 수신동의와 관계없이 모든
              회원에게 발송됩니다.
            </span>
          </>
        ),
      },
    },
  ],
};

const marketingAgreementDetails: Omit<CheckboxFormFieldProps, "form">[] = [
  {
    name: "marketingDetails",
    items: [
      {
        id: "all",
        className: "w-full",
        label: {
          children: "전체수신",
        },
      },
      {
        id: "SMS",

        className: "w-[50%]",
        label: {
          children: "SMS",
        },
      },
      {
        id: "E-mail",
        className: "w-[50%]",
        label: {
          children: "E-mail",
        },
      },
      {
        id: "DM(카탈로그)",
        className: "w-[50%]",
        label: {
          children: "DM(카탈로그)",
        },
      },
      {
        id: "CALL",
        className: "w-[50%]",
        label: {
          children: "CALL",
        },
      },
    ],
  },
];

export default function OptionalFieldSection({ form }: any) {
  return (
    <section className={"pt-[37px] pb-[33px]"}>
      <div className="text-[18px] leading-[22px]">
        <strong>선택항목</strong>
      </div>

      <div className="flex flex-col gap-[20px] mt-[33px]">
        {inputFields.map((props) => (
          <InputFormField key={props.name} form={form} {...props} />
        ))}
      </div>

      <div>
        <div className="text-[16px] font-[700] leading-[22px] mt-[36px] mb-[13px]">
          마케팅정보 수신동의
        </div>
        <CheckboxFormField form={form} {...marketingAgreement} />

        <div className="flex flex-wrap mt-[24px] gap-y-[5px]">
          {marketingAgreementDetails.map((props) => (
            <CheckboxFormField key={props.name} form={form} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
