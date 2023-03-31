"use client";
import CustomPagination from "../layouts/CustomPaigination";
import Filters from "../layouts/Filters";
import ProductItems from "./ProductItems";


export const ListProduct = ({ productsData }) => {
  console.log(productsData);
  return (
    <section className="py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Filters />

          <main className="md:w-2/3 lg:w-3/4 px-3">
            {productsData?.products?.map((product) => (
              <ProductItems key={product?._id} product={product} />
            ))}
            <CustomPagination resPerPage={productsData?.resPerPage} productsCount={productsData?.filteredProductsCount}/>
          </main>
        </div>
      </div>
    </section>
  );
};
