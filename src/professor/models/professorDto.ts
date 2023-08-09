import {z} from "zod";

export interface Professor {
    id: string;
    email: string;
    senha: string;
}
export const ProfessorSchema = z.object({
    id: z.string(),
    email: z.string(),
    senha:  z.string()
})