/*CONSTANTS*/

import {Localization, sequelize, Sweep, Pollen, Record, Interval} from './models.js';
import csv from 'csv-parser';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const results = [];

let contador = 0;

fs.createReadStream('input.csv')
  .pipe(csv({separator: ';'}))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    insertOnDatabase(results);
  });

const insertOnDatabase  = async (results) => {
    const headerRow = results[0];
    const locationID = await findLocationOrAdd(headerRow);
    const sweepID = await findSweepOrAdd(headerRow);
    const headerDate = new Date(headerRow.date);

    const intervalIds = await Promise.all(Object.keys(headerRow).filter(el => el.includes('-')).map(async (intervalKey) =>  findIntervalOrAdd(intervalKey)));
    console.log(intervalIds);
    await Promise.all(results.map(async row => {
        const pollenID = await findPollenOrAdd(row);
        return Promise.all(Object.keys(row).filter(el => el.includes('-')).map(async (intervalKey, index) => {
            const intervalID = intervalIds[index];
            // console.log(row.date);
            return Record.create({
                id: uuidv4(),
                amount: row[intervalKey],
                id_pollen: pollenID,
                id_localization: locationID,
                id_sweep: sweepID,
                date: headerDate,
                id_interval: intervalID
            });
        }))
    }))
    console.log('\n\nFinished! Linhas adicionadas: ' + contador);
};

function findLocationOrAdd(headerRow){
    const keyName = Object.keys(headerRow)[4];
    const key = headerRow[keyName];
    console.log("Search field " + keyName  + " = " + key);
    return new Promise(async (resolve, reject) => {
        const coordinatesFloat = key.replace("(","").replace(")","").replace(" ","").split(",").map(c => parseFloat(c))
        const existingItem = (await sequelize.query(`SELECT "id", "address", "zipcode", "region", "country", "coordinate" FROM localization AS localization WHERE coordinate[0]= :point0 AND coordinate[1]=:point1;`,
        {
            replacements: { point0:  coordinatesFloat[0] , point1: coordinatesFloat[1] },
            type: sequelize.QueryTypes.SELECT
        }))[0];
        if(existingItem == null){
            await sequelize.query(`INSERT INTO public.localization(address, zipcode, region, country, coordinate) VALUES (:address, :zipcode, :region, :country,  point(:point0, :point1));`,
            {
                replacements: {
                    address: headerRow.address,
                    zipcode: headerRow.zipcode,
                    region: headerRow.region,
                    country: headerRow.country,
                    point0:  coordinatesFloat[0] ,
                    point1: coordinatesFloat[1]
                 },
                type: sequelize.QueryTypes.SELECT
            }
            );
            const createdItem = (await sequelize.query(`SELECT "id", "address", "zipcode", "region", "country", "coordinate" FROM localization AS localization WHERE coordinate[0]= :point0 AND coordinate[1]=:point1;`,
            {
                replacements: { point0:  coordinatesFloat[0] , point1: coordinatesFloat[1] },
                type: sequelize.QueryTypes.SELECT
            }))[0];
            console.log("\n\nCreated");
            console.log(createdItem);
            resolve(createdItem.id);
        } else{
            console.log("\n\nExisting");
            console.log(existingItem);
            resolve(existingItem.id);
        }
    });
}

function findSweepOrAdd(headerRow){
    const keyName = Object.keys(headerRow)[5];
    const key = headerRow[keyName];
    console.log("Search field " + keyName  + " = " + key);
    return new Promise(async (resolve, reject) => {
        const existingItem = await Sweep.findOne({where: {name: key}});
        if(existingItem == null){
            const createdItem  = await Sweep.create({
                name: key,
                id: null,
            });
            console.log("\n\nCreated");
            console.log(createdItem.dataValues);
            resolve(createdItem.id);
        } else{
            console.log("\n\nExisting");
            console.log(existingItem.dataValues);
            resolve(existingItem.id);
        }
    });
}

function findPollenOrAdd(headerRow){
    contador++;
    const keyName = Object.keys(headerRow)[8];
    const key = headerRow[keyName];
    console.log("Search field " + keyName  + " = " + key);
    return new Promise(async (resolve, reject) => {
        const existingItem = await Pollen.findOne({where: {name: key}});
        if(existingItem == null){
            const createdItem  = await Pollen.create({
                name: key,
                id: null,
            });
            console.log("\n\nCreated");
            console.log(createdItem.dataValues);
            resolve(createdItem.id);
        } else{
            console.log("\n\nExisting");
            console.log(existingItem.dataValues);
            resolve(existingItem.id);
        }
    });
}

function findIntervalOrAdd(key){
    console.log("Search field " + 'interval'  + " = " + key);
    return new Promise(async (resolve, reject) => {
        const existingItem = await Interval.findOne({where: {gap: key}}, {logging: false});
        if(existingItem == null){
            const createdItem  = await Interval.create({
                gap: key,
                id: null,
            });
            console.log("\n\nCreated");
            console.log(createdItem.dataValues);
            resolve(createdItem.id);
        } else{
            resolve(existingItem.id);
        }
    });
}

