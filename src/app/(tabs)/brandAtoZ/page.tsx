import BrandCatalog from "@/components/layouts/brand/BrandCatalog";
import BrandSearch from "@/components/layouts/brand/BrandSearch";
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
    </main>
  );
}

export default page;
