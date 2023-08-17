"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorSchema = void 0;
const zod_1 = require("zod");
exports.ProfessorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    email: zod_1.z.string(),
    senha: zod_1.z.string()
});
