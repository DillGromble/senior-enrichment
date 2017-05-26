import { connect } from 'react-redux';
import AllStudents from '../components/AllStudents';


const mapState = state => ({
  AllStudents: state.studentsAndFaculty.allStudents
})

const mapDispatch = null;


export default connect(mapState, mapDispatch)(AllStudents);
