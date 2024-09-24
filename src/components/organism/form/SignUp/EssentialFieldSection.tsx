import SeperatedEmailInput from "@/components/molecule/input/SeperatedEmailInput";
import SeperatedPhoneInput from "@/components/molecule/input/SeperatedPhoneInput";
import InputFormField, { InputFormFieldProps } from "../InputFormField";
import CheckboxFormField, {
  CheckboxFormFieldProps,
} from "../CheckboxFormField";

const inputFields: Omit<InputFormFieldProps, "form">[] = [
  {
    name: "email",
    input: {
      element: SeperatedEmailInput,
    },
  },
  {
    name: "password",
    input: {
      placeholder: "비밀번호",
      props: { type: "password" },
    },
    description: {
      children: "숫자, 영문 포함 10자 이상",
    },
  },
  {
    name: "passwordCheck",
    input: {
      placeholder: "비밀번호 확인",
      props: { type: "password" },
    },
    description: {
      children: "숫자, 영문 포함 10자 이상",
    },
  },
  {
    name: "name",
    input: {
      placeholder: "이름",
    },
  },
  {
    name: "phone",
    input: {
      element: SeperatedPhoneInput,
      placeholder: "휴대폰번호",
    },
  },
];

const checkboxField: Omit<CheckboxFormFieldProps, "form"> = {
  name: "over14",
  items: [
    {
      id: "over14",
      className: "space-y-0 mt-[8px]",
      label: {
        className: "text-[14px] leading-[20px]",
        children: "만 14세 이상입니다.(필수)",
      },
    },
  ],
};

export default function EssentialFieldSection({ form }: any) {
  return (
    <section className="pt-[22px] pb-[40px]">
      <div className="text-[18px] leading-[22px]">
        <strong>필수항목</strong>
      </div>

      <div className="flex flex-col mt-[12px] gap-[4px]">
        {inputFields.map((props) => (
          <InputFormField key={props.name} form={form} {...props} />
        ))}
      </div>
      <CheckboxFormField form={form} {...checkboxField} />
    </section>
  );
}
