const instructors = require('express').Router();
const db = require('../../db/models');
const Instructors = db.Instructors;


instructors.get('/', (req, res, next) => {
  Instructors.findAll()
  .then( instructorList => res.json(instructorList))
  .catch(next);
});


instructors.post('/', (req, res, next) => {
  const { name, email, campusId } = req.body;

  Instructors.create({ name, email, campusId })
  .then( instructor => res.json(instructor))
  .catch(next);
});



instructors.use('/:instructorId', (req, res, next) => {
  Instructors.findById( req.params.instructorId )
  .then( instructor => {
    if (!instructor) res.status(404).send('instructor not found!');
    req.instructor = instructor;
    next();
  })
  .catch(next);
});


instructors.get('/:instructorId', (req, res, next) => res.json( req.instructor));


instructors.put('/:instructorId', (req, res, next) => {
  req.instructor.update( req.body )
  .then( updatedinstructor => res.json(updatedinstructor))
  .catch(next);
});


instructors.delete('/:instructorId', (req, res, next) => {
  req.instructor.destroy()
  .then( () => res.sendStatus(204))
  .catch(err => console.log(err));
});


module.exports = instructors;
