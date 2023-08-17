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
const professor_1 = __importDefault(require("../services/professor"));
class ProfessorController {
    constructor() {
    }
    static getInstance() {
        if (!ProfessorController.instance) {
            ProfessorController.instance = new ProfessorController();
        }
        return ProfessorController.instance;
    }
    saveProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = professor_1.default.getInstance();
            const professor = req.body;
            const ProfessorCreated = yield professor_1.default.saveProfessor(professor);
            console.log(ProfessorCreated);
            res.json(ProfessorCreated);
        });
    }
    getProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = professor_1.default.getInstance();
            res.json(yield professorService.getProfessor());
        });
    }
    getProfessorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = professor_1.default.getInstance();
            const id = req.params.id;
            res.json(yield professorService.getProfessorById(id));
        });
    }
    deleteProfessorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = professor_1.default.getInstance();
            const id = req.params.id;
            yield professorService.deleteProfessorByID(id);
            res.json('ok');
        });
    }
    updateProfessorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = professor_1.default.getInstance();
            const id = req.params.id;
            const professor = req.body;
            yield professor_1.default.updateProfessorById(id, professor);
            res.json('ok');
        });
    }
}
exports.default = ProfessorController;
