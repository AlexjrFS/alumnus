import { AppDataSource } from "../database";
import Professor from "../entities/professor";

const ProfessorRep = AppDataSource.getRepository(Professor)

export default ProfessorRep