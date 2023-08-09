import ProfessorService from "../services/professor";
import { Request, Response } from "express";

class ProfessorController {
    private static instance: ProfessorController;

    private constructor(){

    }

    public static getInstance(){
        if(!ProfessorController.instance){
            ProfessorController.instance = new ProfessorController();
        }
        return ProfessorController.instance;
    }

    public async saveProfessor(req: Request, res: Response) {
        const professorService = ProfessorService.getInstance();
        const professor = req.body;
        const ProfessorCreated = await ProfessorService.saveProfessor(professor);
        console.log(ProfessorCreated)
        res.json(ProfessorCreated)
    }

    public async getProfessor(req: Request,res: Response){
        const professorService = ProfessorService.getInstance();
        res.json(await professorService.getProfessor());
    }

    public async getProfessorById(req: Request,res:Response){
        const professorService = ProfessorService.getInstance();
        const id = req.params.id;
        res.json(await professorService.getProfessorById(id));
    }

    public async deleteProfessorById(req: Request,res:Response){
        const professorService = ProfessorService.getInstance();
        const id = req.params.id;
        await professorService.deleteProfessorByID(id);
        res.json('ok');
    }

    public async updateProfessorById(req:Request,res:Response){
        const professorService = ProfessorService.getInstance();
        const id = req.params.id;
        const professor = req.body;
        await ProfessorService.updateProfessorById(id,professor);
        res.json('ok');
    }
}

export default ProfessorController