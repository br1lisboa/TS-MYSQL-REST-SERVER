import { Request, Response } from "express";
import User from "../models/user";


export const getUsers = async (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    // Leer users de nuestra bd mysql
    const users = await User.findAll();

    res.json({
        msg: 'All users',
        users
    });

};


export const getUser = async (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {

        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });

    } else {

        res.json({
            msg: 'User by primary key',
            user
        });

    };

};


export const postUser = async (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    const { body } = req;

    try {

        const isMailExist = await User.findOne({
            where: {
                mail: body.mail
            }
        });

        if (isMailExist) {
            return res.status(400).json({
                msg: `User whit mail ${req.body.mail} alredy exist`
            })
        };

        const nwUser = new User(body);
        await nwUser.save();

        res.json({
            msg: 'New user:',
            nwUser
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            msg: 'You need to contact whhit the admin.'
        });

    };

};


export const putUser = async (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    const { body } = req;
    const { id } = req.params;

    try {

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `User whit id ${id} isnt here`
            })
        };

        await user.update(body);

        res.json({
            msg: 'User update:',
            user
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            msg: 'You need to contact whhit the admin.'
        });

    };

};


export const deleteUser = async (req: Request, res: Response) => { //> Con : le indicamos el tipo, que lo requiere ts

    const { id } = req.params;

    const user = await User.findByPk(id)

    if (!user) {
        return res.status(400).json({
            msg: `User whit id ${id} inst in our BD`
        })
    };

    // Eliminiacion LOGICA - mantiene la integridad fisica de nuestra BD

    await user.update({ state: false });

    res.json({
        msg: 'User destroy',
        user
    }); 


    /* 
    
    ELIMINACION FISICA - SE PIERDE LA REFERENCIA INTEGRAL
    await user.destroy();

    res.json({
        msg: 'User destroy',
        user
    }); 
    
    */

};