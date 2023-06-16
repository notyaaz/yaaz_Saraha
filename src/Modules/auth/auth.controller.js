import userModel from "../../../DB/models/user.model.js"
import { generateToken, verifyToken } from "../../Services/GenerateAndVerify.js"
import { compare, hash } from "../../Services/HashAndCompare.js"
import { sendEmail } from "../../Services/SendEmail.js"
import { signinSchema, signupSchema } from "./auth.validation.js"

export const signup = async (req, res) => {

    const {userName, email, password} = req.body

    const user = await userModel.findOne({email})
    if(user){
        return res.status(409).json({message: "email already exists"})
    }

    const hashPassword = hash(password)
    
    const token = generateToken({email},process.env.EMAIL_TOKEN)
    const link = `https://tiny-cyan-lion-kit.cyclic.app/auth/confirmEmail/${token}`

    
    await sendEmail(email, "a very trusted guy", `<a href="${link}">click me please!!!</a>`)
    
    const createUser = await userModel.create({userName,email, password:hashPassword })

    return res.status(201).json({createUser})
}

export const confirmEmail = async (req, res) => {

    const {token} = req.params
    const decoded = verifyToken(token,process.env.EMAIL_TOKEN)

    const user = await userModel.updateOne({email:decoded.email}, {confirmEmail:true})

    return res.json({message: "your email is confirmed, u can login now"})

}

export const signin = async (req, res) => {


    const {email, password} = req.body

    const user = await userModel.findOne({email})
    if(!user){
        return res.json({message: "invalid data"})
    }
    if(!user.confirmEmail){
        return res.json({message: "plesae verify your email"})
    }
    
    const match = compare(password, user.password)
    if(match){

        const token = generateToken({id:user._id, email, password:user.password})
        return res.json({message: "done!", token})

    }else{
        return res.json({message: "invalid data2"})
    }

}