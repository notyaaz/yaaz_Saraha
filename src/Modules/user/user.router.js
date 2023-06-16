import { Router } from "express";
import * as userController from "./user.controller.js"
import { auth } from "../../middleware/auth.middleware.js";
import { asyncHandler } from "../../Services/Errorhandling.js";
import fileUpload from "../../Services/Multer.js";
const router = Router()

router.get("/", auth, asyncHandler(userController.profile))
router.patch('/profilePic', auth, fileUpload().single("image"), userController.profilePic)

export default router