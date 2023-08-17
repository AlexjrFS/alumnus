"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const professorController_1 = __importDefault(require("../controller/professorController"));
const professorRouter = (0, express_1.Router)();
professorRouter.post('/', professorController_1.default.getInstance().saveProfessor);
professorRouter.get('/', professorController_1.default.getInstance().getProfessor);
professorRouter.get('/:id', professorController_1.default.getInstance().getProfessorById);
professorRouter.delete('/:id', professorController_1.default.getInstance().deleteProfessorById);
professorRouter.put('/:id', professorController_1.default.getInstance().updateProfessorById);
exports.default = professorRouter;
