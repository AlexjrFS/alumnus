import { v4 } from "uuid";
import Professor from "../models/entities/professor";
import ProfessorRep from "../models/repositories/professorRep";
class ProfessorService {
    criaProfessor(Professor: typeof Professor) {
        throw new Error('Method not implemented.');
    }
    lerTodos() {
        throw new Error('Method not implemented.');
    }
    static updateProfessorById(id: string, professor: any) {
        throw new Error("Method not implemented.");
    }
    static saveProfessor(professor: any) {
        throw new Error("Method not implemented.");
    }
    private static instance: ProfessorService;

    private constructor(){

    }

    public static getInstance(){
        if(!ProfessorService.instance){
          ProfessorService.instance = new ProfessorService();
        };
        return ProfessorService.instance;
    }

    public async saveProfessor(obj: Professor): Promise<Professor>{
        obj.id = v4();
        return await ProfessorRep.save(obj);
    }

    public async getProfessor() : Promise<Professor[]> {
        return await ProfessorRep.find();
    }

    public async getProfessorById(id: string) : Promise<Professor | null> {
        return await ProfessorRep.findOneBy({id}); 
    }

    public async deleteProfessorByID(id: string) : Promise <void>{
        await ProfessorRep.delete({id});
    }
    //check protocol to change email and password / conferir protocolo de mudança de email e senha
    public async updateProfessorById(id: string,professor : Professor) : Promise <void>{
        const ProfessorNow = await ProfessorRep.findOneBy({id});
        if(ProfessorNow){
            ProfessorNow.email = professor.email;
            ProfessorNow.senha = professor.senha;
            await ProfessorRep.save(ProfessorNow)
        }
        
        Promise.resolve();
    }
}

export default ProfessorService