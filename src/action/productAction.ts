"use server";

import {
  BrandMediaListRequestType,
  BrandRequestType,
  CategoryByPathRequestType,
  CategpryListRequestType,
  ColorRequestType,
  EtcOptionRequestType,
  MediaRequestType,
  ProductCategoryRequestType,
  ProductDetailRequestType,
  ProductInfoListRequestType,
  ProductListRequestType,
  ProductMediaRequestType,
  ProductOptionListRequestType,
  ProductSingleRequestType,
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
  ProductDetail,
  ProductHashtag,
  ProductInfo,
  ProductMedia,
  ProductOption,
  Size,
} from "@/types/ProductTypes";
import { CommonResType } from "@/types/ResponseTypes";

const headers = { "Content-Type": "application/json" };

export async function getCategoryList(
  req: CategpryListRequestType,
): Promise<Category[] | null> {
  const method = "GET";
  const { parentId } = req || { parentId: "" };
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/category?parentId=${parentId}`,
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

export async function getCategoryByPath(
  req: CategoryByPathRequestType,
): Promise<Category | null> {
  const method = "GET";
  const { path } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/category/path?path=${path}`,
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

export async function getMedia(req: MediaRequestType): Promise<Media | null> {
  const method = "GET";
  const { mediaId } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/media/${mediaId}`,
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

export async function getColorList(): Promise<Color[] | null> {
  const method = "GET";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/colors`, {
    method,
    headers,
    cache: "default",
  });
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
export async function getSizeList(): Promise<Size[] | null> {
  const method = "GET";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/sizes`, {
    method,
    headers,
    cache: "default",
  });
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

export async function getEtcOptionList(): Promise<EtcOption[] | null> {
  const method = "GET";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/etcoptions`, {
    method,
    headers,
    cache: "default",
  });
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

export async function getBrand(req: BrandRequestType): Promise<Brand | null> {
  const method = "GET";
  const { brandUuid } = req;
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/brand/${brandUuid}`,
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

export async function getBrandList(): Promise<Brand[] | null> {
  const method = "GET";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/brand`, {
    method,
    headers,
    cache: "default",
  });
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
