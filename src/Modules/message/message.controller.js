import messageModel from "../../../DB/models/message.model.js"
import userModel from "../../../DB/models/user.model.js"


export const sendMessage = async (req, res) => {
    const {receiverId} = req.params
    const {message} = req.body 
    
    const user = await userModel.findById(receiverId)
    if(!user){
        return res.json({message: "invalid user id"})
    }
    
    const createMessage = await messageModel.create({receiverId, message})
    
    return res.json({message:"success", createMessage})
} 
export const getMessage = async (req, res) => {

    const messagesList = await messageModel.find({receiverId:req.id}) 
    return res.json({message: "success", messagesList})
}  

export const deleteMessage = async (req, res) => {

    const id = req.id
    const {messageId} = req.params
    const deletedMessage = await messageModel.deleteOne({_id:messageId, receiverId:id})
    
    if(deletedMessage.deletedCount == 0){
        return res.json({message: "invalid owner or invalid message"})
    }
    return res.json({message: "success"})
    
}  