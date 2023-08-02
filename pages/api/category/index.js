import { createRouter } from "next-connect";

import onError from "@/backend/middlewares/errors";
import dbConnect from "@/backend/config/dbConnect";
import { getCategory } from "@/backend/controllers/productControllers";

const router = createRouter();

dbConnect();

router.get(getCategory);

export default router.handler({ onError });
