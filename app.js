const Express=require("express")
const bodyParser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const gymModel = require("./gymModel")

const app=Express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(Cors())

Mongoose.connect("mongodb+srv://sreelekshmisl1710:Dharithri@cluster0.y83cozw.mongodb.net/gymDB?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/addg",async(request,response)=>{
    let data=request.body
    const gym=new gymModel(data)
    let result=await gym.save()
    if (result.clientID!="") {
        response.json({"status":"success"})
    } else {
        response.json({"status":"error"})
    }
})

app.get("/viewg",async(request,response)=>{
    let result=await gymModel.find()
    response.json(result)
})



app.listen(3001,()=>{
    console.log("Server is running")
})