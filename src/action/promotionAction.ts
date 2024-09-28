"use server";

import { PromotionRequestType } from "@/types/RequestTypes";
import { CommonResType } from "@/types/ResponseTypes";

const headers = { "Content-Type": "application/json" };

export async function getPromotionList(): Promise<Promotion[] | null> {
  const method = "GET";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/promotion`, {
    method,
    headers,
    cache: "force-cache",
  });
  if (!res.ok) {
    return null;
  }
  const data = (await res.json()) as CommonResType<any>;
  if (data.httpStatus === "OK") {
    const { result } = data;
    return result;
  } else {
    return null;
  }
}
export async function getPromotion(
  req: PromotionRequestType,
): Promise<Promotion | null> {
  const method = "GET";
  const { promotionUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/promotion/${promotionUuid}`,
    {
      method,
      headers,
      cache: "default",
    },
  );
  if (!res.ok) {
    return null;
  }
  const data = (await res.json()) as CommonResType<any>;
  if (data.httpStatus === "OK") {
    const { result } = data;
    return result;
  } else {
    return null;
  }
}

export async function getPromotionProductList(
  req: PromotionRequestType,
): Promise<PromotionProduct[] | null> {
  const method = "GET";
  const { promotionUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/promotion/promotionProduct/${promotionUuid}`,
    {
      method,
      headers,
      cache: "default",
    },
  );
  if (!res.ok) {
    return null;
  }
  const data = (await res.json()) as CommonResType<any>;
  if (data.httpStatus === "OK") {
    const { result } = data;
    return result;
  } else {
    return null;
  }
}

export async function getPromotionMediaList(
  req: PromotionRequestType,
): Promise<PromotionMedia[] | null> {
  const method = "GET";
  const { promotionUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/promotion/promotionMedia/${promotionUuid}`,
    {
      method,
      headers,
      cache: "default",
    },
  );
  const data = (await res.json()) as CommonResType<any>;
  if (data.httpStatus === "OK") {
    const { result } = data;
    return result;
  } else {
    return null;
  }
}

export async function getPromotionBenefitList(
  req: PromotionRequestType,
): Promise<PromotionBenefit[] | null> {
  const method = "GET";
  const { promotionUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/promotion/promotionBenefit/${promotionUuid}`,
    {
      method,
      headers,
      cache: "default",
    },
  );
  const data = (await res.json()) as CommonResType<any>;

  if (data.httpStatus === "OK") {
    const { result } = data;
    return result;
  } else {
    return null;
  }
}
