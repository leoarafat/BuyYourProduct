import { createRouter } from "next-connect";
import onError from "@/backend/middlewares/errors";
import dbConnect from "@/backend/config/dbConnect";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import { myOrders } from "@/backend/controllers/orderControllers";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser).get(myOrders);

export default router.handler({ onError });
