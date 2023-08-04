import { v4 } from "uuid";
import Professor from "../models/entities/professor";
import ProfessorRep from "../models/repositories/professorRep";

class ProfessorService {
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
}

export default ProfessorService