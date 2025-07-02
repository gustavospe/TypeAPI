import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";

@Entity("produtos")
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column("decimal", { precision: 10, scale: 2 })
    preco: number;

    @Column()
    descricao: string;




}