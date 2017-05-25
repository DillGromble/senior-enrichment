const classes = require('express').Router();
const db = require('../../db/models');
const Classes = db.Classes;


classes.get('/', (req, res, next) => {
  Classes.findAll()
  .then( classesList => res.json(classesList))
  .catch(next);
});


classes.post('/', (req, res, next) => {
  const { name, studentId, instructorId } = req.body;

  Classes.create({ name, studentId, instructorId })
  .then( singleClass => res.json(singleClass))
  .catch(next);
});



classes.use('/:className', (req, res, next) => {
  Classes.findOne({ where: { name: req.params.className }})
  .then( singleClass => {
    if (!singleClass) res.status(404).send('Class not found!');
    req.singleClass = singleClass;
    next();
  })
  .catch(next);
});


classes.get('/:className', (req, res, next) => res.json( req.singleClass ));


classes.put('/:className', (req, res, next) => {
  req.singleClass.update( req.body )
  .then( updatedsingleClass => res.json(updatedsingleClass))
  .catch(next);
});


classes.delete('/:className', (req, res, next) => {
  req.singleClass.destroy()
  .then( () => res.sendStatus(204))
  .catch(err => console.log(err));
});

module.exports = classes;
