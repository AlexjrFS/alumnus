import {Router} from "express"
import ProfessorController from "../controller/professorController";
a
const professorRouter= Router();

professorRouter.post('/',ProfessorController.getInstance().saveProfessor);
professorRouter.get('/',ProfessorController.getInstance().getProfessor);
professorRouter.get('/:id',ProfessorController.getInstance().getProfessorById);
professorRouter.delete('/:id',ProfessorController.getInstance().deleteProfessorById);
professorRouter.put('/:id',ProfessorController.getInstance().updateProfessorById);

export default professorRouter 
