import { createRouter } from "next-connect";

import { getAllProducts } from "@/backend/controllers/productControllers";
import onError from "@/backend/middlewares/errors";
import dbConnect from "@/backend/config/dbConnect";

const router = createRouter();

dbConnect();

router.get(getAllProducts);

export default router.handler({ onError });
