import { Router } from "express";
import * as authController from "./auth.controller.js"
import { asyncHandler } from "../../Services/Errorhandling.js";
import validation from "../../middleware/validation.middleware.js";
import { signinSchema, signupSchema } from "./auth.validation.js";
const router = Router()

router.post("/signup", validation(signupSchema),asyncHandler(authController.signup))
router.post("/signin", validation(signinSchema) ,asyncHandler(authController.signin))
router.get("/confirmEmail/:token", authController.confirmEmail)

export default router