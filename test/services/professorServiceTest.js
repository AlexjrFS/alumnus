"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const professor_1 = __importDefault(require("../../src/professor/services/professor"));
const uuid_1 = require("uuid");
const professor_2 = __importDefault(require("../../src/professor/models/entities/professor"));
const typeorm_1 = require("typeorm");
const professorRep_1 = __importDefault(require("../../src/professor/models/repositories/professorRep"));
const professores = [];
test('criar produto', () => __awaiter(void 0, void 0, void 0, function* () {
    professorRep_1.default.find = jest.fn((a) => Promise.resolve(professores));
    professorRep_1.default.delete = jest.fn((a) => new Promise(resolve => { professores.splice(0, 100); resolve(new typeorm_1.DeleteResult()); }));
    (professorRep_1.default.save) = (data) => { console.log(data); professores.push(data); return Promise.resolve(data); };
    //ProfessorRep.save()
    const id1 = (0, uuid_1.v4)();
    const professor = {
        id: id1, email: "perfume", senha: "1234",
        expect(professores) { }, : .length
    };
})).toBe(0),
    professor_1.default.getInstance().criaProfessor(professor_2.default);
//professoreservice.getInstance().lerTodos()
expect(professores.length).toBe(1);
expect(professores[0].email).toBe(professores[1].email);
test('ler todos', () => __awaiter(void 0, void 0, void 0, function* () {
    professores.splice(0, 100);
    const id1 = (0, uuid_1.v4)();
    const id2 = (0, uuid_1.v4)();
    const professor1 = {
        id: id1, email: "perfume", senha: "1234"
    };
    const professor2 = {
        id: id2, email: "perfume", senha: "1235"
    };
    yield professorRep_1.default.save(professor1);
    yield professorRep_1.default.save(professor2);
    const professoresResultado = yield professor_1.default.getInstance().lerTodos();
    expect(professoresResultado.length).toBe(2);
    // expect(professores[1]).toBe(produto2);
}));
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
