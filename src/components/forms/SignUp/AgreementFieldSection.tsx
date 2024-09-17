import CheckboxFormField, {
  CheckboxFormFieldProps,
} from "@/components/forms/CheckboxFormField";

const marketingAgreementDetails: Omit<CheckboxFormFieldProps, "form">[] = [
  {
    name: "signUpAgreements",
    items: [
      {
        id: "all",
        className: "space-y-0 py-[20px] border-b",
        label: {
          children: "모두 동의합니다.",
        },
        description: {
          children: (
            <span className="block font-[400] text-[12px] text-[#787878] text-wrap leading-[18px] mt-[8px] pl-[32px] pr-[24px] tracking-[-0.8px]">
              전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
              선택항목에 대한 동의를 거부하시는 경우에도 서비스 이용이
              가능합니다.
            </span>
          ),
        },
      },
      {
        id: "website",
        className: "space-y-0 py-[20px] border-b",
        label: {
          children: (
            <>
              신세계인터내셔날 웹사이트 이용약관
              <span className="text-amber-600">(필수)</span>
            </>
          ),
        },
      },
      {
        id: "member",
        className: "space-y-0 py-[20px] border-b",
        label: {
          children: (
            <>
              신세계인터내셔날 통합회원 이용약관
              <span className="text-amber-600">(필수)</span>
            </>
          ),
        },
      },
      {
        id: "personalInfo",
        className: "space-y-0 py-[20px] border-b",
        label: {
          children: (
            <>
              서비스 제공을 위한 개인정보 수집 및 이용동의
              <span className="text-amber-600">(필수)</span>
            </>
          ),
        },
      },
      {
        id: "membership",
        className: "space-y-0 py-[20px] border-b",
        label: {
          children: (
            <>
              통합 멤버십 서비스 제공을 위한 신세계톰보이 정보 제공 동의
              <span className="text-amber-600">(선택)</span>
            </>
          ),
        },
      },
    ],
  },
];

export default function OptionalFieldSection({ form }: any) {
  return (
    <section className={"pt-[42px] pb-[33px]"}>
      <div className="text-[18px] leading-[22px]">
        <strong>이용약관</strong>
      </div>

      <div>
        <div className="flex flex-wrap mt-[24px]">
          {marketingAgreementDetails.map((props) => (
            <CheckboxFormField key={props.name} form={form} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
