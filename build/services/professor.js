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
const uuid_1 = require("uuid");
const professorRep_1 = __importDefault(require("../models/repositories/professorRep"));
class ProfessorService {
    constructor() {
    }
    static getInstance() {
        if (!ProfessorService.instance) {
            ProfessorService.instance = new ProfessorService();
        }
        ;
        return ProfessorService.instance;
    }
    saveProfessor(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            obj.id = (0, uuid_1.v4)();
            return yield professorRep_1.default.save(obj);
        });
    }
    getProfessor() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield professorRep_1.default.find();
        });
    }
    getProfessorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield professorRep_1.default.findOneBy({ id });
        });
    }
    deleteProfessorByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield professorRep_1.default.delete({ id });
        });
    }
}
exports.default = ProfessorService;
