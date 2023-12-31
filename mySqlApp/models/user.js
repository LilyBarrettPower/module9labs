const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model { }
//Sequelize will create this table if it doesn't exist on startup
// create the users model referring to your physical model
User.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    userName: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    email: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    password: {
        type: DataTypes.STRING, allowNull: false, required: true
    }, 
    profilePicture: {
        type: DataTypes.STRING, allowNull: false, required: true
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'users', //use lowercase plural format 
        timestamps: true, freezeTableName: true
    }
)
module.exports = User;