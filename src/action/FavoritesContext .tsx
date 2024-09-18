import React, { createContext, useState, useContext, ReactNode } from "react";

type FavoritesContextType = {
  favorites: { [key: string]: boolean };
  toggleFavorite: (brandNo: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const toggleFavorite = (brandNo: string) => {
    setFavorites((prev) => ({
      ...prev,
      [brandNo]: !prev[brandNo],
    }));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
