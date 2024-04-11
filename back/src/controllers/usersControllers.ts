/*import { Request , Response } from "express";
import { createUserService, getUsersService, deleteUserService}  from "../services/usersService";
import IUser from "../interface/IUser";

export const createUser = async (req:Request, res:Response) =>{
    const { name, email, active} = req.body;
    const newUser:IUser = await createUserService({name,email,active});
    res.status(201).json(newUser);
}

export const getUsers =async (req:Request, res:Response) => {
    const users:IUser[] = await getUsersService()
    res.status(200).json(users);
    
}

export const deleteUser = async (req:Request, res:Response) => {
    const {id} = req.body
    await deleteUserService(id)
    res.status(200).json({message: "Eliminado correctamente"});
    
}*/

import { Request, Response } from 'express'; 
import  UserDto from '../dto/UserDto'; 
import { createUserService, getUsersService, deleteUserService, getUserByIdService } from "../services/usersService" 

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData: UserDto = req.body; 
        const newUser = await createUserService(userData); 
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' }); // Maneja cualquier error
    }
};

// Controlador para obtener todos los usuarios
export const getUsersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getUsersService(); 
        res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' }); // Maneja cualquier error
    }
};

// Controlador para eliminar un usuario por su ID
export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = parseInt(req.params.id); // Obtén el ID del usuario de los parámetros de la solicitud
        await deleteUserService(userId); // Llama a la función del servicio para eliminar el usuario
        res.status(204).end(); // Responde con éxito sin contenido
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' }); // Maneja cualquier error
    }
};

// Controlador para obtener un usuario por su ID
export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = parseInt(req.params.id); // Obtén el ID del usuario de los parámetros de la solicitud
        const user = getUserByIdService(userId); // Llama a la función del servicio para obtener el usuario por su ID
        if (user) {
            res.status(200).json(user); // Responde con el usuario encontrado
        } else {
            res.status(404).json({ message: 'User not found' }); // Responde con un error si el usuario no se encuentra
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user' }); // Maneja cualquier error
    }
};
