import { ListProduct } from "@/components/products/ListProduct";
import axios from "axios";

const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  return data;
};
const Home = async() => {
  const productsData = await getProducts()
  return <ListProduct productsData={productsData}/>;
};
export default Home;
