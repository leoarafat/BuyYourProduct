import { createRouter } from "next-connect";
import onError from "@/backend/middlewares/errors";
import dbConnect from "@/backend/config/dbConnect";

import { checkoutSession } from "@/backend/controllers/orderControllers";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser).post(checkoutSession);

export default router.handler({ onError });
