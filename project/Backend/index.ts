import express, {Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dns from "dns";
import contactpageModel from "./Model/contactpage";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./Model/user";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


dns.setServers(['8.8.8.8', '1.1.1.1'])
mongoose.connect(process.env.MONGO_URL as string)
.then((response)=>{
    console.log("mongodb connected successfully")
})
.catch((err)=>{
    console.log("not connected")
})








// api for contactpage


app.post("/contactpage", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create contact data
    const contact = await contactpageModel.create({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: contact,
    });

  } catch (error: any) {
    console.error(error);

    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});







app.post(
"/signup",
async(req:Request,res:Response)=>{


try{


const {
email,
password
}=req.body;



if(!email || !password){

return res.status(400).json({

success:false,

message:"Email and password required"

});

}




const existUser =
await User.findOne({
email
});



if(existUser){

return res.status(400).json({

success:false,

message:"User already exists"

});

}





const hashPassword =
await bcrypt.hash(
password,
10
);




const user =
await User.create({

email,

password:hashPassword

});





return res.status(201).json({

success:true,

message:"Signup successful",

user:{
id:user._id,
email:user.email
}

});



}
catch(error:any){


return res.status(500).json({

success:false,

message:"Server error",

error:error.message

});


}


});







// =======================
// LOGIN API
// =======================


app.post(
"/login",
async(req:Request,res:Response)=>{


try{


const {
email,
password
}=req.body;



if(!email || !password){

return res.status(400).json({

success:false,

message:"Email and password required"

});

}




const user =
await User.findOne({
email
});




if(!user){

return res.status(404).json({

success:false,

message:"User not found"

});

}





const checkPassword =
await bcrypt.compare(

password,

user.password

);




if(!checkPassword){

return res.status(401).json({

success:false,

message:"Wrong password"

});

}





const token =
jwt.sign(

{
id:user._id
},

process.env.JWT_SECRET as string,

{
expiresIn:"7d"
}

);





return res.status(200).json({

success:true,

message:"Login successful",

token,

user:{
id:user._id,
email:user.email
}

});



}
catch(error:any){


return res.status(500).json({

success:false,

message:"Server error",

error:error.message

});


}


});




const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});