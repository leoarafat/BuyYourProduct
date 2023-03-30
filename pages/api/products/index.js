import dbConnect from "@/backend/config/dbConnect";
import { getProducts, newProduct } from "@/backend/controllers/productControllers";
import nc from "next-connect";

const handler = nc();
dbConnect();
handler.get(getProducts);
handler.post(newProduct);

export default handler;
