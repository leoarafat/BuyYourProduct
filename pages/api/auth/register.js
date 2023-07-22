// import nc from "next-connect";
// import dbConnect from "@/backend/config/dbConnect";
// import { registerUser } from "@/backend/controllers/authControllers";
// import onError from "@/backend/middlewares/errors";

// const handler = nc({ onError });

// dbConnect();

// handler.post(registerUser);

// export default handler;
import { createRouter } from "next-connect";
import onError from "@/backend/middlewares/errors";
import dbConnect from "@/backend/config/dbConnect";
import { registerUser } from "@/backend/controllers/authControllers";

const router = createRouter();

dbConnect();

router.get(registerUser);

export default router.handler({ onError });
