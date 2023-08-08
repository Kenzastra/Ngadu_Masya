import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Petugas = db.define('petugas',{
    id_petugas : {
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    nama_petugas : DataTypes.STRING,
    username : DataTypes.STRING,
    password : DataTypes.STRING,
    telp : DataTypes.STRING,
    level : DataTypes.STRING
},{
    freezeTableName : true
});

export default Petugas;

(async()=>{
    await db.sync();
}) ();