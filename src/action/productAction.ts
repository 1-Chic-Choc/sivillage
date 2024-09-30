"use server";

import {
  BrandMediaListRequestType,
  BrandRequestType,
  CategoryByPathRequestType,
  CategpryListRequestType,
  ColorRequestType,
  CreateCartItemResquestType,
  EtcOptionRequestType,
  MediaRequestType,
  ProductBest100RequestType,
  ProductCategoryFilteringValuesRequestType,
  ProductCategoryRequestType,
  ProductDetailRequestType,
  ProductInfoListRequestType,
  ProductLikeRequestType,
  ProductListCountRequestType,
  ProductListRequestType,
  ProductMediaRequestType,
  ProductOptionListRequestType,
  ProductReviewListRequestType,
  ProductReviewMediaListRequestType,
  ProductReviewRequestType,
  ProductScoreRequestType,
  ProductSingleRequestType,
  ProductSizesPerColorResquestType,
  SizeRequestType,
} from "@/types/RequestTypes";
import {
  Brand,
  Category,
  Color,
  EtcOption,
  Media,
  Product,
  ProductCategory,
  ProductCategoryFilteringValues,
  ProductDetail,
  ProductHashtag,
  ProductInfo,
  ProductLike,
  ProductListCount,
  ProductMedia,
  ProductOption,
  ProductScore,
  ProductSizesPerColor,
  Size,
} from "@/types/ProductTypes";
import { CommonResType } from "@/types/ResponseTypes";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import {
  ProductReview,
  ProductReviewList,
  ProductReviewMedia,
} from "@/types/ReviewTypes";

const headers = { "Content-Type": "application/json" };

export async function getCategoryList(
  req?: CategpryListRequestType,
): Promise<Category[] | null> {
  const method = "GET";
  const { parentId } = req || { parentId: "" };
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/category?parentId=${parentId}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProuctCategory(
  req: ProductCategoryRequestType,
): Promise<ProductCategory[] | null> {
  const method = "GET";
  const { productId } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/category/product?productId=${productId}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getCategoryByPath(
  req: CategoryByPathRequestType,
): Promise<Category | null> {
  const method = "GET";
  const { path } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/category/path?path=${path.join(",")}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductList(
  req: ProductListRequestType,
): Promise<Product[] | null> {
  const method = "GET";
  const searchParams = new URLSearchParams(Object.entries(req));
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products?${searchParams}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductBest100(
  req: ProductBest100RequestType,
): Promise<Product[] | null> {
  const method = "GET";
  const searchParams = new URLSearchParams(Object.entries(req));
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products/best?${searchParams}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductCategoryFilteringValues(
  req: ProductCategoryFilteringValuesRequestType,
): Promise<ProductCategoryFilteringValues | null> {
  const method = "GET";
  const searchParams = new URLSearchParams(Object.entries(req));
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products/attributes?${searchParams}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductListCount(
  req: ProductListCountRequestType,
): Promise<ProductListCount | null> {
  const method = "GET";
  const searchParams = new URLSearchParams(Object.entries(req));
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products/count?${searchParams}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductSingle(
  req: ProductSingleRequestType,
): Promise<Product | null> {
  const method = "GET";
  const { productUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products/one/${productUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductSizesPerColorList(
  req: ProductSizesPerColorResquestType,
): Promise<ProductSizesPerColor[] | null> {
  const method = "GET";
  const { productUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products/colors-sizes/${productUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductOptionList(
  req: ProductOptionListRequestType,
): Promise<ProductOption[] | null> {
  const method = "GET";
  const { productUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products/${productUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductInfoList(
  req: ProductInfoListRequestType,
): Promise<ProductInfo[] | null> {
  const method = "GET";
  const { productUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products/infos/${productUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductHashtagList(
  req: ProductInfoListRequestType,
): Promise<ProductHashtag[] | null> {
  const method = "GET";
  const { productUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products/hashtags/${productUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductDetailList(
  req: ProductDetailRequestType,
): Promise<ProductDetail[] | null> {
  const method = "GET";
  const { productOptionUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/products/details/${productOptionUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductMediaList(
  req: ProductMediaRequestType,
): Promise<ProductMedia[] | null> {
  const method = "GET";
  const { productOptionUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/product-media/${productOptionUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getMedia(req: MediaRequestType): Promise<Media | null> {
  const method = "GET";
  const { mediaId } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/media/${mediaId}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getColorList(): Promise<Color[] | null> {
  const method = "GET";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/colors`, {
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

export async function getColor(req: ColorRequestType): Promise<Color | null> {
  const method = "GET";
  const { id } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/colors/${id}`,
    {
      method,
      headers,
      cache: "force-cache",
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
export async function getSizeList(): Promise<Size[] | null> {
  const method = "GET";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/sizes`, {
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

export async function getSize(req: SizeRequestType): Promise<Size | null> {
  const method = "GET";
  const { id } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/sizes/${id}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getEtcOptionList(): Promise<EtcOption[] | null> {
  const method = "GET";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/etcoptions`, {
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

export async function getEtcOption(
  req: EtcOptionRequestType,
): Promise<EtcOption | null> {
  const method = "GET";
  const { id } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/etcoptions/${id}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getBrand(req: BrandRequestType): Promise<Brand | null> {
  const method = "GET";
  const { brandUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/brand/${brandUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getBrandList(): Promise<Brand[] | null> {
  const method = "GET";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/brand`, {
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

export async function getBrandMediaList(
  req: BrandMediaListRequestType,
): Promise<Brand[] | null> {
  const method = "GET";
  const { brandUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/brand/media/${brandUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductLike(
  req: ProductLikeRequestType,
): Promise<ProductLike | null> {
  const method = "GET";
  const { productUuid } = req;
  const session = await getServerSession(options);
  const token = session?.user?.accessToken;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/product/like/${productUuid}`,
    {
      method,
      headers: { ...headers, Authorization: `Bearer ${token}` },
      cache: "no-cache",
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
export async function postProductLike(
  req: ProductLikeRequestType,
): Promise<{} | null> {
  const method = "POST";
  const { productUuid } = req;
  const session = await getServerSession(options);
  const token = session?.user?.accessToken;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/product/like/${productUuid}`,
    {
      method,
      headers: { ...headers, Authorization: `Bearer ${token}` },
      cache: "no-cache",
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

export async function postCartItem(
  req: CreateCartItemResquestType,
  unsignedMemberUuid: string,
): Promise<{} | null> {
  const method = "POST";
  const session = await getServerSession(options);
  const token = session?.user?.accessToken;
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/cart`, {
    method,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
      "X-Unsigned-User-UUID": unsignedMemberUuid,
    },
    body: JSON.stringify(req),
    cache: "no-cache",
  });
  const data = (await res.json()) as CommonResType<any>;
  return data.code;
  // if (data.httpStatus === "OK") {
  //   const { result } = data;
  //   return result;
  // } else {
  //   return null;
  // }
}

export async function getProductScore(
  req: ProductScoreRequestType,
): Promise<ProductScore | null> {
  const method = "GET";
  const { productUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/product-scores/${productUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
    },
  );

  const data = (await res.json()) as ProductScore;
  return data;
  // if (!res.ok) {
  //   return null;
  // }
  // const data = (await res.json()) as CommonResType<any>;
  // if (data.httpStatus === "OK") {
  //   const { result } = data;
  //   return result;
  // } else {
  //   return null;
  // }
}

export async function getProductReviewList(
  req: ProductReviewListRequestType,
): Promise<ProductReviewList | null> {
  const method = "GET";
  const { productUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/review/productUuid?productUuid=${productUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductReview(
  req: ProductReviewRequestType,
): Promise<ProductReview | null> {
  const method = "GET";
  const { reviewUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/review/${reviewUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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

export async function getProductReviewMediaList(
  req: ProductReviewMediaListRequestType,
): Promise<ProductReviewMedia[] | null> {
  const method = "GET";
  const { reviewUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/review/Media/${reviewUuid}`,
    {
      method,
      headers,
      cache: "force-cache",
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
