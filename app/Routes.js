import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './components/Root';
import AllCampusesContainer from './containers/AllCampusesContainer';
import SingleCampusContainer from './containers/SingleCampusContainer';

import AllStudentsContainer from './containers/AllStudentsContainer';
import { fetchCampuses, fetchCampus } from './reducers/campuses';
import { fetchAllStudents } from './reducers/studentsAndFaculty';







const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/"  component={ Root } onEnter={ props.loadCampuses }>
        <IndexRoute component={ AllCampusesContainer } />
        <Route path="/campuses/:campusId" component={ SingleCampusContainer } onEnter={ props.selectCampus } />
        <Route path="/students" component={ AllStudentsContainer } onEnter={ props.loadStudents } />
      </Route>
    </Router>
)}



const mapProps = null;

const mapDispatch = dispatch => ({
  loadCampuses: () => {
    dispatch(fetchCampuses())
  },
  selectCampus: (nextRouterState) => {
    const campusId = nextRouterState.params.campusId
    dispatch(fetchCampus(campusId))
  },
  loadStudents: () => {
    dispatch(fetchAllStudents())
  }
})


export default connect(mapProps, mapDispatch)(Routes);
