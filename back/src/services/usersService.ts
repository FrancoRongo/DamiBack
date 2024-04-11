
import UserDto from "../dto/UserDto";
import IUser from "../interface/IUser";
import { createCredential } from "./credentialService";

let users:IUser[] =[]
let id:number =1

export const createUserService = async (userData:UserDto):Promise<IUser> =>{
    const credeId = createCredential(userData.username, userData.password)
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        birthdate: new Date(),
        nDni: userData.nDni,
        credentialsId: credeId
        
      };
    users.push(newUser);
    id++;
    return newUser;
}

export const getUsersService = async ():Promise<IUser[]> => {
    return users
};


export const deleteUserService= async (id:number):Promise<void> => {
    users=users.filter((user:IUser)=>{
        return user.id !== id
    })
};

export const getUserByIdService = (id: number): IUser | undefined => {
    return users.find(user => user.id === id);
  }
  
