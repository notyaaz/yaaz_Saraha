import jwt from "jsonwebtoken"

export const generateToken = (payload, signature = process.env.SIGNATURE, expiresIn="10h") => {
    const token = jwt.sign(payload, signature, {expiresIn})

    return token
}

export const verifyToken = (token, signature = process.env.SIGNATURE) => {
    const decoded = jwt.verify(token, signature)

    return decoded
}