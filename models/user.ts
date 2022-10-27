import { DataTypes } from "sequelize";
// Ref a la DB
import db from "../db/connection";


// Model con sql
const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    mail: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    }
});


export default User;
