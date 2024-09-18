"use client";

import React from "react";
import { FavoritesProvider, useFavorites } from "@/action/FavoritesContext ";
import { brandDataModi } from "@/datas/dummy/brandNameData";

export default function MyFav() {
  const { favorites } = useFavorites();
  const brandData = brandDataModi("en");

  const favoriteBrands = brandData.filter((brand) => favorites[brand.ctg_no]);

  return (
    <FavoritesProvider>
      <div>
        <h1 className="text-2xl font-bold">My Favorite Brands</h1>
        <ul>
          {favoriteBrands.length > 0 ? (
            favoriteBrands.map((brand) => (
              <li key={brand.ctg_no} className="py-2">
                <div className="font-bold">{brand.brand_name}</div>
                <p className="text-sm text-gray-500">{brand.brand_name_ko}</p>
              </li>
            ))
          ) : (
            <p>No favorite brands selected yet.</p>
          )}
        </ul>
      </div>
    </FavoritesProvider>
  );
}
