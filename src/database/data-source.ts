import { DataSource } from "typeorm";
import { Produto } from "../entities/produto";
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: "mysql", // ou "mysql", "sqlite", etc.
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Produto],
    migrations: ["dist/database/migrations/*.js"],
    synchronize: Boolean(process.env.DB_SYNC), // Sincroniza automaticamente as entidades com o banco
});

export default AppDataSource;