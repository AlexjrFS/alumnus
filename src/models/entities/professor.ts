import "reflect-metadata";
import { Column, Entity, PrimaryColumn} from "typeorm";
import { v4 } from "uuid";
@Entity()
  class Professor {
      @PrimaryColumn("uuid")
      id: string;                       
      @Column()
      email: string;       
      @Column()
      senha: string;
}

export default Professor;