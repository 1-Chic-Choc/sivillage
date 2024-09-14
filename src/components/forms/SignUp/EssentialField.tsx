import SeperatedEmailInput from "@/components/inputs/SeperatedEmailInput";
import InputWithClear from "@/components/inputs/InputWithClear";
import {
  CheckboxFieldData,
  InputFieldData,
} from "@/components/forms/form-interface";
import FormSection from "@/components/forms/FormSection";
import SeperatedPhoneInput from "@/components/inputs/SeperatedPhoneInput";

const inputFieldDatas: InputFieldData[] = [
  {
    name: "email",
    inputElement: SeperatedEmailInput,
    placeholder: "",
  },
  {
    name: "password",
    inputElement: InputWithClear,
    placeholder: "비밀번호",
    description: "숫자, 영문 포함 10자 이상",
    props: { type: "password" },
  },
  {
    name: "passwordCheck",
    inputElement: InputWithClear,
    placeholder: "비밀번호 확인",
    description: "숫자, 영문 포함 10자 이상",
    props: { type: "password" },
  },
  {
    name: "name",
    inputElement: InputWithClear,
    placeholder: "이름",
  },
  {
    name: "phone",
    inputElement: SeperatedPhoneInput,
    placeholder: "휴대폰번호",
  },
];

const checkboxFieldDatas: CheckboxFieldData[] = [
  {
    id: "shouldBeOver14",
    name: "shouldBeOver14",
    label: "만 14세 이상입니다.(필수)",
  },
];

export default function EssentialField({ form }: any) {
  return <FormSection {...{ form, inputFieldDatas, checkboxFieldDatas }} />;
}
