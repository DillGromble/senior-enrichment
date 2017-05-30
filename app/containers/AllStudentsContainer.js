import React from 'react';
import { connect } from 'react-redux';

import NameCampusTable from '../components/NameCampusTable';
import SearchFilter from '../components/SearchFilter';


const mapState = state => ({
  people: state.studentsAndFaculty.allStudents
})



class AllStudents extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    })
  }

  render () {
    const inputValue = this.state.inputValue;
    const filteredPeople = this.props.people.filter( person =>
        person.name.match(inputValue) || person.campus.name.match(inputValue));

    return (
      <div>
        <NameCampusTable people={ filteredPeople } />
        <SearchFilter handleChange={ this.handleChange } value={ inputValue } />
      </div>
    )
  }
}

const AllStudentsContainer = connect(mapState)(AllStudents);

export default AllStudentsContainer;
