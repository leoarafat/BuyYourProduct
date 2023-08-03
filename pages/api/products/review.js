import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createProductReview } from "@/backend/controllers/productControllers";
import onError from "@/backend/middlewares/errors";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser).put(createProductReview);

export default router.handler({ onError });
