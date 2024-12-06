interface IUser {
    _id:String
    name:String
    email:String
    lastnames:String
    password:String
    rol: "administrador" | "client";
}

declare namespace Express{
    export interface Request{
        user?:IUser
    }
}