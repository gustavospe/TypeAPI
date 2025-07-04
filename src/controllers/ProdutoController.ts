import { Request, Response } from "express";

export const produtoController = {

    async buscar(req: Request, res: Response) {
        const { id } = req.params;
        return res.status(200).json({status: `Produto com ID ${id} encontrado!`})
    },

    async listar(req: Request, res: Response) {
        return res.status(200).json({status: "Lista de produtos"})
    },

    async criar(req: Request, res: Response) {
        return res.status(200).json({status: "Produto criado com sucesso!"})
    },

    async atualizar(req: Request, res: Response) {
        const { id } = req.params;
        return res.status(200).json({status: `Produto com ID ${id} atualizado!`})
    },

    async deletar(req: Request, res: Response) {
        const { id } = req.params;
        return res.status(200).json({status: `Produto com ID ${id} deletado!`})
    }
}