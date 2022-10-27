import { Request, Response } from "express";


export const getUsers = (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    res.json({
        msg: 'getUsers'
    });

};


export const getUser = (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    const { id } = req.params;

    res.json({
        msg: 'getUser',
        id
    });

};


export const postUser = (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    const { body } = req;

    res.json({
        msg: 'postUser',
        body
    });

};


export const putUser = (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putUser',
        body,
        id
    });

};


export const deleteUser = (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id
    });

};
