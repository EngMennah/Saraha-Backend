
import { Router } from "express";
import {
    createMessage,
    getMessages
} from "./message.controller.js";
import { auth } from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/send", auth, createMessage);
router.get("/inbox", auth, getMessages);

export default router;

