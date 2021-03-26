import Sequelize from 'sequelize';

export const sequelize = new Sequelize('PUT_CREDS_HERE', 'PUT_CREDS_HERE', 'PUT_CREDS_HERE', {
    host: 'PUT_CREDS_HERE',
    port: 5432,
    dialect: 'postgres' 
});



  export const Pollen = sequelize.define("pollen", {
    id: {
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
    },
    name: Sequelize.DataTypes.TEXT
  }, {freezeTableName: true, createdAt: false, updatedAt: false});
  
  export const Localization = sequelize.define("localization", {
      id: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
      },
      address: Sequelize.DataTypes.TEXT,
      zipcode: Sequelize.DataTypes.TEXT,
      region: Sequelize.DataTypes.TEXT,
      country: Sequelize.DataTypes.TEXT,
      coordinate: Sequelize.DataTypes.GEOGRAPHY('POINT',)
  }, {freezeTableName: true, createdAt: false, updatedAt: false});
  
  export const Sweep = sequelize.define("sweep", {
      id: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
      },
      name: Sequelize.DataTypes.TEXT
  }, {freezeTableName: true, createdAt: false, updatedAt: false});
  
  export const Interval = sequelize.define("interval", {
      id: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
      },
      gap: Sequelize.DataTypes.TEXT
  }, {freezeTableName: true, createdAt: false, updatedAt: false});
  
  export const RecordComplementation = sequelize.define("record_complementation", {
      id: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER
      },
      complementation: Sequelize.DataTypes.TEXT
  }, {freezeTableName: true, createdAt: false, updatedAt: false});
  
  export const Record = sequelize.define("record", {
      id: {
          primaryKey: true,
          type: Sequelize.DataTypes.UUID,
          autoIncrement: true,
      },
      date: Sequelize.DataTypes.DATE,
      amount: Sequelize.DataTypes.INTEGER,
      id_pollen: Sequelize.DataTypes.INTEGER,
      id_localization: Sequelize.DataTypes.INTEGER,
      id_sweep: Sequelize.DataTypes.INTEGER,
      id_interval: Sequelize.DataTypes.INTEGER
  }, {freezeTableName: true, createdAt: false, updatedAt: false});
  
  export const AdditionalInfo = sequelize.define("additional_info", {
      id_record_complementation: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER
      },
      id_record: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER
      }
  }, {freezeTableName: true, createdAt: false, updatedAt: false});
