import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduto1751466957936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "preco",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                    },
                    {
                        name: "descricao",
                        type: "text",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
