import joi from "joi";



export const signupSchema ={

    body : joi.object({
        userName: joi.string().alphanum().min(3).max(20).required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        cPassword: joi.string().valid(joi.ref('password')).required()
    }).required(),

    query : joi.object({
        test: joi.boolean().required()
    }).required()

}



export const signinSchema = {

    body : joi.object({
        password: joi.string().required(),
        email: joi.string().email().required(),
    }).required()

} 