const Mongoose=require("mongoose")
const gymModel=Mongoose.model("gyms",Mongoose.Schema(
    {
        clientID:{type:String,required:true},
        clientName:String,
        clientDOB:String,
        clientAge:String,
        clientGender:String,
        bloodGroup:String,
        clientWeight:String,
        clientHeight:String,
        phoneNumber:String,
        Address:String,
        personalTrainerReq:String
    }
))
module.exports=gymModel