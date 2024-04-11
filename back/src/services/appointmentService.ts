import IAppointment from "../interface/IAppointment";
import { getUserByIdService } from "./usersService";

let appointments:IAppointment[] = [];
let id:number = 1;

export const getAllAppointment = (): IAppointment[] =>{
  return appointments;
}

export const createAppointment = async (userId: number, date: Date, time: string): Promise<IAppointment | null> => {
    try {
        const user = await getUserByIdService(userId);
        if (!user) {
            console.error("El usuario no existe");
            return null;
        }

        const newAppointment: IAppointment = {
            id,
            date,
            time,
            userId,
            status: "active"
        };

        appointments.push(newAppointment);
        id++;
        return newAppointment;
    } catch (error) {
        console.error("Error al crear la cita:", error);
        throw error; 
    }
}

export const cancelAppointment = async (appointmentId: number): Promise<void> => {
    try {
        const appointmentIndex = appointments.findIndex(appointment => appointment.id === appointmentId);
        if (appointmentIndex === -1){
            console.error("El turno no existe");
            throw new Error("El turno no existe"); 
        } 
        appointments[appointmentIndex].status = "cancelled";
        return; 
    } catch (error) {
        console.error("Error al cancelar la cita:", error);
        throw error; 
    }
}
export const getAppointmentById = async (id: number): Promise<IAppointment | undefined> => {
    try {
        return await appointments.find(appointment => appointment.id === id);
    } catch (error) {
        console.error("Error al obtener la cita por ID:", error);
        throw error;
    }
}
