import userModel from "../../../DB/models/user.model.js"
import cloudinary from "../../Services/cloudinary.js"

export const profile = (req, res) => {
    res.json({message: req.id})
}

export const profilePic = async (req, res) => {   
    if(!req.file){
        return res.status(400).json({message: "please upload an image"})
    }

    const cloud = await cloudinary.uploader.upload(req.file.path, {folder: `saraha/user/${req.id}`})

    const updated = await userModel.updateOne({_id:req.id}, {profilePic: cloud.secure_url})
    return res.json({cloud})
}