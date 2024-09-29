import Image from "next/image";

export default function loading() {
  return (
    <main className="w-full h-[50vh] flex justify-center items-center">
      <Image src={"/loading.webp"} alt="로딩중" width={56} height={56} />
    </main>
  );
}
