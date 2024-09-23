import { z } from "zod";

const email = z
  .string({ message: "아이디(이메일주소)를 입력해주세요" })
  .min(1, { message: "아이디(이메일주소)를 입력해주세요" })
  .email({ message: "아이디는 영문, 숫자로 된 이메일 주소만 가능합니다." });

const autoSignIn = z.array(z.string());

const password = z
  .string({ message: "비밀번호를 입력해주세요." })
  .min(1, { message: "비밀번호를 입력해주세요." })
  .regex(new RegExp("^(?=.*[a-zA-Z])(?=.*\\d)(?!.*\\s).{10,}$"), {
    message:
      "비밀번호는 10자 이상으로, 영문대소문자, 숫자 중 2가지 이상 조합으로 공백없이 설정해 주세요.",
  });

const passwordCheck = z.string({
  message: "비밀번호가 일치하지 않습니다. 다시 입력해주세요.",
});

const name = z
  .string({ message: "이름을 입력해 주세요." })
  .min(1, { message: "이름을 입력해 주세요." });

const phone = z.string({ message: "핸드폰 번호를 입력해주세요." });

const birth = z.string();
const address = z.object({
  zonecode: z.string(),
  fullAddress: z.string(),
});

const over14 = z
  .array(z.string())
  .refine((value) => value.some((item) => item === "over14"), {
    message: "",
  });

const marketingAgreement = z.array(z.string());
const marketingAgreementDetails = z.array(z.string());

export const signInSchema = z.object({
  email: z
    .string({ message: "아이디(이메일주소)를 입력해주세요" })
    .min(1, { message: "아이디(이메일주소)를 입력해주세요" }),
  password: z
    .string({ message: "비밀번호를 입력해주세요." })
    .min(1, { message: "비밀번호를 입력해주세요." }),
  autoSignIn,
});

export const signUpEssential = z.object({
  email,
  password,
  passwordCheck,
  name,
  phone,
  over14,
});

export const signUpOptional = z.object({
  birth,
  address,
  marketingAgreement,
  marketingAgreementDetails,
});

export const signUpAgreements = z
  .array(z.string())
  .refine(
    (value) =>
      value.includes("website") &&
      value.includes("member") &&
      value.includes("personalInfo"),
    { message: "" },
  );

export const signUpSchema = z
  .object({
    ...signUpEssential.shape,
    ...signUpOptional.shape,
    signUpAgreements,
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "비밀번호가 일치하지 않습니다. 다시 입력해주세요.",
  });
