import React from "react";
import TopCategoryList from "@/components/layouts/categories/TopCategoryList";

function Categories() {
  return (
    <main className="w-full">
      {/* <div className="grid grid-cols-9 h-screen"> */}
      <div className="w-full">
        <TopCategoryList />
        {/* <div className='col-span-3 border-r-2'>
          <TopCategoryList />
        </div>
        <div className='pl-4 col-span-6 w-full'>
          <MiddleCategoryList /> */}
        {/* </div> */}
      </div>
    </main>
  );
}

export default Categories;
