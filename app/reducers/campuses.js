import axios from 'axios';


/*--------------------------------ACTIONS-------------------------------------*/

const INITIALIZE = 'INITIALIZE_CAMPUSES';
const SELECT = 'SELECT_CAMPUS';



/*----------------------------ACTION CREATORS---------------------------------*/

const loadCampuses = campuses => ({ type: INITIALIZE, campuses });
const selectCampus = campus => ({ type: SELECT, campus })




/*--------------------------------REDUCER-------------------------------------*/

const initialState = {
  selectedCampus: {},
  allCampuses: []
};

export default function reducer (state = initialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {

    case INITIALIZE:
      newState.allCampuses = action.campuses;
      break;

    case SELECT:
      newState.selectedCampus = action.campus;
      break;

    default:
      return state;
  }

  return newState;
}

/*---------------------------------THUNKS-------------------------------------*/

export const fetchCampuses = () =>
  dispatch =>
    axios.get('/api/campuses')
    .then( res => dispatch(loadCampuses(res.data)))
    .catch( err => console.log(err));


export const fetchCampus = (campusId) =>
  dispatch =>
    axios.get(`/api/campuses/${campusId}`)
    .then( res => dispatch(selectCampus(res.data)))
    .catch( err => console.log(err));




