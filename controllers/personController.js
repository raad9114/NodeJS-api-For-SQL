'use strict raad api';

const personData = require('../data/persons');

const getAllpersons = async (req, res, next) => {
    try {

        const alldata = await personData.getpersons();
        res.send(alldata);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getperson = async (req, res, next) => {
    try {
        const xposition = req.params.xposition;
        const byId = await personData.getById(xposition);
        res.send(byId);    
    } 
    catch (error) {
        res.status(400).send(error.message);
    }
}

const addperson = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await personData.creatperson(data);
        res.send(insert);
    } 
    catch (error) {
        res.status(400).send(error.message);
    }
}

const upPerson = async (req, res, next) => {
    try {
        const xposition =  req.params.xposition;
        const data = req.body;
        const up = await personData.UpdatePerson(data);
        res.send(up);
    } 
    catch (error) {
        res.status(400).send(error.message);
    }
}


const delperson = async (req, res, next) => {
    try {
        const xposition = req.params.xposition;
        const deletedperson = await personData.deleteperson(xposition);
        res.send(deletedperson);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllpersons,
    getperson,
    addperson,
    upPerson,
    delperson
}