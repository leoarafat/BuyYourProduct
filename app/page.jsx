// import React from "react";
// import axios from "axios";

// import queryString from "query-string";
// import ListProducts from "@/components/products/ListProduct";
// import Header from "@/components/layouts/Header";

// export const metadata = {
//   title: "Next.js 13 Ecommerce App",
// };

// const getProducts = async (searchParams) => {
//   const urlParams = {
//     keyword: searchParams.keyword,
//     page: searchParams.page,
//     category: searchParams.category,
//     "price[gte]": searchParams.min,
//     "price[lte]": searchParams.max,
//     "ratings[gte]": searchParams.ratings,
//   };

//   const searchQuery = queryString.stringify(urlParams);

//   const { data } = await axios.get(
//     `${process.env.API_URL}/api/products?${searchQuery}`
//   );

//   return data;
// };

// const HomePage = async ({ searchParams }) => {
//   const productsData = await getProducts(searchParams);

//   return (
//     <>
//       {/* <Header /> */}
//       <ListProducts data={productsData} />
//     </>
//   );
// };

// export default HomePage;
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
