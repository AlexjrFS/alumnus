"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const professor_1 = __importDefault(require("./entities/professor"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1605",
    database: "alumnus",
    synchronize: true,
    logging: true,
    entities: [professor_1.default],
    subscribers: [],
    migrations: []
});
