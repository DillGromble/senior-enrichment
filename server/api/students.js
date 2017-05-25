const students = require('express').Router();
const db = require('../../db/models');
const Students = db.Students;


students.get('/', (req, res, next) => {
  Students.findAll()
  .then( studentList => res.json(studentList))
  .catch(next);
});


students.post('/', (req, res, next) => {
  const { name, email, campusId } = req.body;

  Students.create({ name, email, campusId })
  .then( student => res.json(student))
  .catch(next);
});



students.use('/:studentId', (req, res, next) => {
  Students.findById( req.params.studentId )
  .then( student => {
    if (!student) res.status(404).send('Student not found!');
    req.student = student;
    next();
  })
  .catch(next);
});


students.get('/:studentId', (req, res, next) => res.json( req.student ));


students.put('/:studentId', (req, res, next) => {
  req.student.update( req.body )
  .then( updatedStudent => res.json(updatedStudent))
  .catch(next);
});


students.delete('/:studentId', (req, res, next) => {
  req.student.destroy()
  .then( () => res.sendStatus(204))
  .catch(err => console.log(err));
});


module.exports = students;
