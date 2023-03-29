import dbConnect from "@/backend/config/dbConnect";
import { getProduct, newProduct } from "@/backend/controllers/productControllers";
import nc from "next-connect";

const handler = nc();
dbConnect();
handler.get(getProduct);
handler.post(newProduct);

export default handler;
