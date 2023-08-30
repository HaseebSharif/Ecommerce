import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'


//REGISTER
export const registerUser =  async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
      const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
  
      const user = await newUser.save();
      res.status(200).json({
        Success: true,
        Message: "User Registered Successfully",
          user
    });
    } catch (err) {
      res.status(500).json(err)
    }
  };
  
  //LOGIN
  export const Login =  async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if(!user)
      {return res.status(404).json("user not found");
    }else{

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if( !validPassword){

            return res.status(400).json("wrong password");
        }
         else{
            const token = jwt.sign({
                id: user._id,
                role: user.role,
              },
              'muhammadhaseebsharif' );

             res.cookie('accessToken',token,{
                httpOnly: true
            }).status(200).json({
                Success: true,
                Message: "User LoggedIn Successfully",
                  user
            })
         }
    }
    } catch (err) {
      res.status(500).json(err)
    }
  };


  export const LogOut = async(req,res) =>{
    try{
        res.clearCookie("accessToken",{
          sameSite:"none",
          secure: true
      }).status(200).send("User has loggedOut")
          }catch(err){
              res.send(err)
          }
  }