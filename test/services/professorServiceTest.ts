import 'reflect-metadata'
import ProfessorService from '../../src/professor/services/professor';
import { v4 } from "uuid";
import Professor from '../../src/professor/models/entities/professor';
import { DeleteResult } from 'typeorm';
import ProfessorRep from '../../src/professor/models/repositories/professorRep';


const professores: Professor[] = [];

test('criar produto', async () => {
    
    ProfessorRep.find = jest.fn((a: any) => Promise.resolve(professores))
    ProfessorRep.delete = jest.fn((a: any) => new Promise(resolve => {professores.splice(0,100); resolve(new DeleteResult()) }))
    ProfessorRep.save<any> = (data) => { console.log(data); professores.push(data); return Promise.resolve(data)}    
    
    //ProfessorRep.save()

    const id1 = v4();
    const professor = {
        id: id1, email: "perfume", senha: "1234"
    expect(professores.length).toBe(0),
    ProfessorService.getInstance().criaProfessor(Professor);
    //professoreservice.getInstance().lerTodos()
    expect(professores.length).toBe(1);
    expect(professores[0].email).toBe(professores[1].email);
})



test('ler todos', async ()=>{
    professores.splice(0,100);
    const id1 = v4();
    const id2= v4();
   
    const professor1 = {
        id: id1, email: "perfume", senha: "1234"
    } 
    const professor2 = {
        id: id2, email: "perfume", senha: "1235"
    } 
    await ProfessorRep.save(professor1)
    await ProfessorRep.save(professor2)
    const professoresResultado = await ProfessorService.getInstance().lerTodos();
    expect (professoresResultado.length).toBe(2);
   // expect(professores[1]).toBe(produto2);
})
/*

test("ler por id(id) ", async () => {
    const id1 = v4();
    const id2 = v4();
    const id3 = v4();
    
    const produto1 = { id: id1, nome: "perfumebao", serie: 1234, descricao: "asdaff", preco: 200 } ;
    const produto2 = { id: id2, nome: "perfume1", serie: 4784, descricao: "ablublu", preco: 15 } ;
    const produto3 = { id: id3, nome: "perfume2", serie: 2390, descricao: "seila", preco: 12 } ;

   ProfessorRep.save(produto1)
   ProfessorRep.save(produto2)
   ProfessorRep.save(produto3)
    let professoreselecionadoPorID = professoreservice.getInstance().lerPorId(id1);
    
    expect((await professoreselecionadoPorID)?.nome).toBe("perfumebao");
    professoreselecionadoPorID = professoreservice.getInstance().lerPorId(id1);
    
    expect((await professoreselecionadoPorID)?.nome).toBe("perfume1");
    professoreselecionadoPorID = professoreservice.getInstance().lerPorId(id2);
    
    expect((await professoreselecionadoPorID)?.nome).toBe("perfume2");
    professoreselecionadoPorID = professoreservice.getInstance().lerPorId(id3);
    

})