import { ListProduct } from "@/components/products/ListProduct";
import axios from "axios";
import queryString from "query-string";

const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams?.keyword,
    page: searchParams?.page,
    category: searchParams?.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/products?${searchQuery}`
  );
  return data;
};

const Home = async({searchParams}) => {
  const productsData = await getProducts(searchParams)
  return <ListProduct productsData={productsData}/>;
};
export default Home;
