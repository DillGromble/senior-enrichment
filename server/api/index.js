'use strict'
const api = require('express').Router()



api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.use('/students', require('./students'));
api.use('/instructors', require('./instructors'));
api.use('/campuses', require('./campuses'));
api.use('/classes', require('./classes'));


module.exports = api;

