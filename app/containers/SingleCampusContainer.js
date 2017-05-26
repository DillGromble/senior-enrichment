import { connect } from 'react-redux';
import SingleCampus from '../components/SingleCampus';


const mapState = state => ({
  selectedCampus: state.campuses.selectedCampus
})

const mapDispatch = null;


export default connect(mapState, mapDispatch)(SingleCampus);
