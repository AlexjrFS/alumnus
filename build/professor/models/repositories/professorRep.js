"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const professor_1 = __importDefault(require("../entities/professor"));
const ProfessorRep = database_1.AppDataSource.getRepository(professor_1.default);
exports.default = ProfessorRep;
