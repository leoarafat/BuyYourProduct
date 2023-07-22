import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createProductReview } from "@/backend/controllers/productControllers";
import onError from "@/backend/middlewares/errors";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

const router = createRouter();

dbConnect();

handler.use(isAuthenticatedUser).put(createProductReview);

export default handler;
