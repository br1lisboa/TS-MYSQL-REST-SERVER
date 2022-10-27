"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Leer users de nuestra bd mysql
    const users = yield user_1.default.findAll();
    res.json({
        msg: 'All users',
        users
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
    else {
        res.json({
            msg: 'User by primary key',
            user
        });
    }
    ;
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const isMailExist = yield user_1.default.findOne({
            where: {
                mail: body.mail
            }
        });
        if (isMailExist) {
            return res.status(400).json({
                msg: `User whit mail ${req.body.mail} alredy exist`
            });
        }
        ;
        const nwUser = new user_1.default(body);
        yield nwUser.save();
        res.json({
            msg: 'New user:',
            nwUser
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'You need to contact whhit the admin.'
        });
    }
    ;
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `User whit id ${id} isnt here`
            });
        }
        ;
        yield user.update(body);
        res.json({
            msg: 'User update:',
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'You need to contact whhit the admin.'
        });
    }
    ;
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(400).json({
            msg: `User whit id ${id} inst in our BD`
        });
    }
    ;
    // Eliminiacion LOGICA - mantiene la integridad fisica de nuestra BD
    yield user.update({ state: false });
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
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map