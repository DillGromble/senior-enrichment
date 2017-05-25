const campuses = require('express').Router();
const db = require('../../db/models');
const Campuses = db.Campuses;


campuses.get('/', (req, res, next) => {
  Campuses.findAll()
  .then( campusesList => res.json(campusesList))
  .catch(next);
});


campuses.post('/', (req, res, next) => {
  const { name, image } = req.body;

  Campuses.create({ name, image })
  .then( campus => res.json(campus))
  .catch(next);
})



campuses.use('/:campusId', (req, res, next) => {
  Campuses.findById( req.params.campusId )
  .then( campus => {
    if (!campus) res.status(404).send('Campus not found!');
    req.campus = campus;
    next();
  })
  .catch(next);
})


campuses.get('/:campusId', (req, res, next) => res.json( req.campus ));


campuses.put('/:campusId', (req, res, next) => {
  req.campus.update( req.body )
  .then( updatedCampus => res.json(updatedCampus))
  .catch(next);
});


campuses.delete('/:campusId', (req, res, next) => {
  req.campus.destroy()
  .then( () => res.sendStatus(204))
  .catch(err => console.log(err));
});


module.exports = campuses;
