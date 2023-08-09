import "reflect-metadata";
import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
class Professor {
    @PrimaryColumn()
    id: string | undefined;                       
    @Column()
    email: string | undefined;       
    @Column()
    senha: string | undefined;
}

export default Professor;