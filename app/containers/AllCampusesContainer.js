import { connect } from 'react-redux';
import AllCampuses from '../components/AllCampuses';


const mapState = state => ({
  allCampuses: state.campuses.allCampuses
})

const mapDispatch = null;


export default connect(mapState, mapDispatch)(AllCampuses);
