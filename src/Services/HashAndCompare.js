import bcrypt from "bcrypt"

export const hash = (plainText, saltRound = parseInt(process.env.SALT_ROUND))=> {
    const hashValue = bcrypt.hashSync(plainText, saltRound)
    return hashValue
}

export const compare = (plainText, hashValue)=> {

    const hashBoolean = bcrypt.compareSync(plainText, hashValue)
    return hashBoolean
}