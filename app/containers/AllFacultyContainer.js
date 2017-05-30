import { connect } from 'react-redux';
import NameCampusTable from '../components/NameCampusTable';


const mapState = state => ({
  people: state.studentsAndFaculty.allFaculty
})


export default connect(mapState)(NameCampusTable);
