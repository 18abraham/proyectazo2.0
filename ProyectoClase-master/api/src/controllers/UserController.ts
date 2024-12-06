import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";
import jwt from "jsonwebtoken";

export const registerUsers = async (req: Request, rest: Response): Promise<void> => {
    try {
        const name = req.body.name
        const email = req.body.email
        const lastnames = req.body.lastnames
        const password = req.body.password
        const rol = req.body.rol

        if (req.user?.rol === "administrador" && rol === "client") {
            rest.status(400).json({
                msg: "Los administradores no pueden crear clientes"
            })
            return
        }

        if (!name || !email || !lastnames || !password || !rol) {
            rest.status(400).json({
                msg: "Faltan datos para crear un usuario"
            })
            return
        }
        if (rol === "administrator" && req.user?.rol != "administrador") {
            rest.status(400).json({
                msg: "No puedes crear un nuevo administrador si no eres uno"
            })
            return
        }

        const user = await UserModel.create({
            name,
            email,
            lastnames,
            password,
            rol
        })

        const token = jwt.sign(JSON.stringify(user), "Eltigre");

        rest.status(200).json({
            msg: "Usuaro registrado con exito", token
        })
        return
    } catch (error) {
        console.log(error);
        rest.status(500).json({
            msg: "Hubo un error al crear el usuario"
        })
        return
    }
}

export const singin= async (req:Request, res: Response):Promise<void>=>{
    
    try {
        const user = await UserModel.findOne({email:req.body.email, password:req.body.password})
        
        if(!user) {
             res.status(400).json({
                msg:"No hay coincidencias en el sistema"
            })
            return;
           }
       if(user){
        const token= jwt.sign(JSON.stringify(user),"pocoyo");
         res.status(200).json({msg: "Sesion iniciada con exito", token, user})
         return;
       }
    } catch (error) {
        console.log(error);
         res.status(500).json({
            msg:"Hubo un error al iniciar sesion"
        })
        return;
    }

}