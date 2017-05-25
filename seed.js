const db = require('./db')
const models = require('./db/models');
const Campuses = models.Campuses;
const Classes = models.Classes;
const Instructors = models.Instructors;
const Students = models.Students;
const Users = models.Users;



db.sync()
.then( () => {
  return Campuses.bulkCreate([
    { name: 'FullStack Academy', image: 'http://lorempizel.com/400/400/city' },
    { name: 'Grace Hopper Academy', image: 'http://lorempizel.com/400/400/city' },
    { name: 'Mars University', image: 'http://lorempizel.com/400/400/city' },
    { name: 'Greendale Community College', image: 'http://lorempizel.com/400/400/city' }
    ])
})
.then( () => {
  return Instructors.bulkCreate([
    { name: 'Gabe Lebec', email: 'Gabe@Gabe.com', campusId: 1 },
    { name: 'Emily Intersimone', email: 'Emily@Emily.com', campusId: 1 },

    { name: 'David Yang', email: 'David@David.com', campusId: 2 },
    { name: 'Omri Bernstein', email: 'Omri@Omri.com', campusId: 2 },

    { name: 'Hubert Farnsworth', email: 'Hubert@Hubert.com', campusId: 3 },
    { name: 'Ogden Wernstrom', email: 'Ogden@Ogden.com', campusId: 3 },

    { name: 'Ben Chang', email: 'Ben@Ben.com', campusId: 4 },
    { name: 'The Bumbledean', email: 'Dean@Dean.com', campusId: 4 },

  ])
})
.then( () => {
  return Students.bulkCreate([
    { name: 'Josh White', email: 'Josh@josh.com', campusId: 1 },
    { name: 'Alice Perez', email: 'Alice@Alice.com', campusId: 1 },
    { name: 'Dennis Bui', email: 'Dennis@Dennis.com', campusId: 1 },
    { name: 'Cindy Chen', email: 'Cindy@Cindy.com', campusId: 1 },
    { name: 'Madeliene Owen', email: 'Madeleine@Madeleine.com', campusId: 1 },
    { name: 'Maureen Hernandez', email: 'Maureen@Maureen.com', campusId: 1 },
    { name: 'Jen Tam', email: 'Jen@Jen.com', campusId: 1 },

    { name: 'Gracey Hopsman', email: 'Grace@Grace.com', campusId: 2 },
    { name: 'Ada Lovelace', email: 'Ada@Ada.com', campusId: 2 },

    { name: 'Phillip Fry', email: 'Fry@Fry.com', campusId: 3 },
    { name: 'Amy Wong', email: 'Amy@Amy.com', campusId: 3 },
    { name: 'Kif Kroker', email: 'Kif@Kif.com', campusId: 3 },
    { name: 'Zapp Brannigan', email: 'Zapp@Zapp.com', campusId: 3 },
    { name: 'Hermes Conrad', email: 'Hermes@Hermes.com', campusId: 3 },

    { name: 'Jeff Winger', email: 'Jeff@Jeff.com', campusId: 4 },
    { name: 'Britta Perry', email: 'Britta@Britta.com', campusId: 4 },
    { name: 'Abed Nadir', email: 'Abed@Abed.com', campusId: 4 },
    { name: 'Troy Barnes', email: 'Troy@Troy.com', campusId: 4 },
    { name: 'Pierce Hawthorn', email: 'Pierce@Pierce.com', campusId: 4 },
  ])
})
.then( () => {
  return Classes.bulkCreate([
    { name: 'Express Basics', studentId: 1, instructorId: 1 }
  ])
})
.then( () => console.log('seed complete'));
