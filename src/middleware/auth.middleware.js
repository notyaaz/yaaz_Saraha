import userModel from "../../DB/models/user.model.js"
import { verifyToken } from "../Services/GenerateAndVerify.js"

export const auth = async (req, res, next) => {

    const {authorization} = req.headers 
    if(!authorization?.startsWith(process.env.BEARER)){
        return res.json({message: "invalid Bearer key"})
    }

    const token = authorization.split(process.env.BEARER)[1]
    if(!token){
        return res.json({message: "invalid token"})
    }

    const decoded = verifyToken(token)

    const authUser = await userModel.findById(decoded.id)
    if(!authUser){
        return res.json({message: "not registered account"})
    }
    req.id = decoded.id
    next()

    
}