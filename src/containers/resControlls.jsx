import { connect } from 'react-redux';
import ResControls from '../components/controls/resControlls';
import { addNotesData, updateNotesContent } from '../redux//actions/resource';



const mapDispatchToProps = (dispatch,notesContent) => ({
    addNotesData: (notesContent) = ()  => dispatch(addNotesData(notesContent)),
    // updateNotesContent: (id, content) => dispatch(updateNotesContent(id, content)),
});

export default connect(
    null,
    mapDispatchToProps,
)(ResControls);
