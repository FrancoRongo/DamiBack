import ICredential from "../interface/ICredential";

let credentials: ICredential[] = [];
let id: number = 1;

export const createCredential = (username: string, password: string): number => {
    try {
        const newCredential: ICredential = {
            id,
            username,
            password,
        };
        credentials.push(newCredential);
        return newCredential.id;
    } catch (error) {
        throw new Error("Error al crear credencial: " + (error instanceof Error ? error.message : "Unknown error"));
    }
};

export const validateCredential =  (username: string, password: string): number => {
    try {
        const allCredentials = credentials.find(
            cred => cred.username === username && cred.password === password
        );
        return allCredentials ? allCredentials.id : -1;
    } catch (error) {
        throw new Error("Error al validar credencial: " + (error instanceof Error ? error.message : "Unknown error"));
    }
};
