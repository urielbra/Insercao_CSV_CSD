'use strict';

const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
    const Polem_Registers = sequelize.define('Polem_Registers', {
        Location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Responsable: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        RegistrationDay: {
            type: DataTypes.DATETIME,
            allowNull: true,
        },
        Acer_0_1: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, { freezeTableName: true});
    Polem_Registers.associate = function (models) {
        // associations can be defined here
    };
    sequelizePaginate.paginate(Polem_Registers);
    // Polem_Registers.sync({force: true})
    return Polem_Registers;
};