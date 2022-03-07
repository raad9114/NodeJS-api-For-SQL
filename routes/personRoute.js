'use strict RAAD API';

const express = require('express');
const personControll = require('../controllers/personController');
const router = express.Router();


router.get('/persons', personControll.getAllpersons);
router.get('/persons/:xposition', personControll.getperson);
router.post('/personsraad', personControll.addperson);
router.put('/persons/:xposition', personControll.upPerson);
router.delete('/persons/:xposition', personControll.delperson);

module.exports = {
    routes: router
}