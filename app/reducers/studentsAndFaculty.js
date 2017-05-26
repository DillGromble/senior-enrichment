import axios from 'axios';


/*--------------------------------ACTIONS-------------------------------------*/

const INITIALIZE = 'INITIALIZE_STUDENTS';
const SELECT = 'SELECT_STUDENT';



/*----------------------------ACTION CREATORS---------------------------------*/

const loadStudents = students => ({ type: INITIALIZE, students });
const selectStudent = student => ({ type: SELECT, student })




/*--------------------------------REDUCER-------------------------------------*/

const initialState = {
  selectedStudent: {},
  allStudents: []
};

export default function reducer (state = initialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {

    case INITIALIZE:
      newState.allStudents = action.students;
      break;

    case SELECT:
      newState.selectedStudent = action.student;
      break;

    default:
      return state;
  }

  return newState;
}

/*---------------------------------THUNKS-------------------------------------*/

export const fetchAllStudents = () =>
  dispatch =>
    axios.get('/api/students')
    .then( res => dispatch(loadStudents(res.data)))
    .catch( err => console.log(err));


export const fetchStudent = (studentId) =>
  dispatch =>
    axios.get(`/api/campuses/${studentId}`)
    .then( res => dispatch(selectStudent(res.data)))
    .catch( err => console.log(err));



