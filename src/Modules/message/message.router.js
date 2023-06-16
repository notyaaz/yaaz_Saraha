import { Router } from "express";
import * as messageController from "./message.controller.js"
import { auth } from "../../middleware/auth.middleware.js";
const router = Router()

router.get("/", auth, messageController.getMessage)
router.post("/:receiverId", messageController.sendMessage)
router.delete("/:messageId", auth, messageController.deleteMessage)

export default router  