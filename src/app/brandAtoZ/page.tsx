import BrandCatalog from "@/components/layouts/brand/BrandCatalog";
import BrandSearch from "@/components/layouts/brand/BrandSearch";
import BottomNavigationBar from "@/components/navbars/BottomNavigationBar";
import React from "react";

function page() {
  return (
    <main>
      <section id="brandSearch">
        <BrandSearch />
      </section>
      <section id="brandCategory">
        <BrandCatalog />
      </section>
      <div>
        <BottomNavigationBar />
      </div>
    </main>
  );
}

export default page;
