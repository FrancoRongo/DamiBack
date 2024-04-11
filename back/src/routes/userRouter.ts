import express from 'express'; 
import { createUserController, getUsersController, deleteUserController, getUserByIdController } from '../controllers/usersControllers'; 

const userRouter = express.Router(); 


userRouter.post('/', createUserController);

userRouter.get('/', getUsersController);


userRouter.delete(':id', deleteUserController);


userRouter.get('/:id', getUserByIdController);

export default userRouter; 