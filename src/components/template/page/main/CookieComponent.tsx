"use client";
import { useEffect, useState } from "react";

export default function UnsignedMember({ uuid }: any) {
  useEffect(() => {
    document.cookie = `X-Unsigned-User-UUID=${uuid.userUuid}; path=/; max-age=2592000;`;
  }, [uuid]);

  return null;
}
