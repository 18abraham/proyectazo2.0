import {Schema, model} from "mongoose"
import { IUser } from "../GlobalTypes"

const UserSchema = new Schema<IUser>({
    name:{
        type:String,
        requiered:true
    },
    lastnames:{
        type:String,
        requiered:true
    },
    email:{
        type:String,
        requiered:true
    },
    password:{
        type:String,
        requiered:true
    },
    rol:{
        type:String,
        enum:["administrador","client"],
        default:"client"
    }
})

export const UserModel = model("user",UserSchema)