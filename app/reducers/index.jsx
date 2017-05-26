import { combineReducers } from 'redux';
import campuses from './campuses';
import studentsAndFaculty from './studentsAndFaculty';

export default combineReducers({ campuses, studentsAndFaculty })

