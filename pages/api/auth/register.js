import { createRouter } from "next-connect";
import onError from "@/backend/middlewares/errors";
import dbConnect from "@/backend/config/dbConnect";
import { registerUser } from "@/backend/controllers/authControllers";

const router = createRouter();

dbConnect();

router.post(registerUser);

export default router.handler({ onError });
