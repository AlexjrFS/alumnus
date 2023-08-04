import { DataSource } from "typeorm";
import Professor from './entities/professor';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port:3306,
  username: "root",
  password:"1605",
  database: "alumnus",
  synchronize: true,
  logging:true,
  entities:[Professor],
  subscribers:[],
  migrations:[]
})