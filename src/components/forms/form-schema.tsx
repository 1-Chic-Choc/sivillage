import { z } from "zod";

const email = z
  .string({ message: "아이디(이메일주소)를 입력해주세요" })
  .min(1, { message: "아이디(이메일주소)를 입력해주세요" })
  .email({ message: "아이디는 영문, 숫자로 된 이메일 주소만 가능합니다." });

const autoLogin = z.array(z.string());

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

const phone = z
  .string({ message: "핸드폰 번호를 입력해주세요/" })
  .regex(new RegExp("^[\\d]{10,11}$"), {
    message: "형식이 유효하지 않습니다.",
  });

const birth = z.string();

const address = z.object({
  zonecode: z.string(),
  fullAddress: z.string(),
});

const shouldBeOver14 = z
  .array(z.string())
  .refine((value) => value.some((item) => item === "shouldBeOver14"), {
    message: "",
  });

const marketingAgreements = z.array(z.string());

export const signInSchema = z.object({
  email: z
    .string({ message: "아이디(이메일주소)를 입력해주세요" })
    .min(1, { message: "아이디(이메일주소)를 입력해주세요" }),
  password: z
    .string({ message: "비밀번호를 입력해주세요." })
    .min(1, { message: "비밀번호를 입력해주세요." }),
  autoLogin,
});

export const signUpEssential = z.object({
  email,
  password,
  passwordCheck,
  name,
  phone,
  shouldBeOver14,
});

export const signUpOptional = z.object({
  birth,
  address,
  marketingAgreements,
});

export const signUpAgreements = z
  .array(z.string())
  .refine(
    (value) =>
      value.includes("website") &&
      value.includes("member") &&
      value.includes("personalInfo") &&
      value.includes("membership"),
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
