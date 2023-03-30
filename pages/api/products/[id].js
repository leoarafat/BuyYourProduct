import dbConnect from "@/backend/config/dbConnect";
import { getProduct } from "@/backend/controllers/productControllers";
import nc from "next-connect";

const handler = nc();
dbConnect();
handler.get(getProduct);

export default handler;
