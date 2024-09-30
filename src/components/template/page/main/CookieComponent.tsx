"use client";

import { getUnsisngedMemberUuid } from "@/action/unsignedMemberAction";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

export default function UnsignedMember({ uuid }: any) {
  useEffect(() => {
    console.log("#####", uuid);
    document.cookie = `X-Unsigned-User-UUID=${uuid.userUuid}; path=/; max-age=2592000;`;
    // const apiUrl = `http://localhost:8080/api/v1/unsignedMember`; // 실제 API 엔드포인트로 변경 필요

    // console.log(apiUrl);

    // const response = fetch(apiUrl, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include"
    // }).then(res => res.json());

    // fetchUuid();
  }, []);

  return <div></div>;
}
