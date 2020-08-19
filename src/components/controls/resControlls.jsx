import React from 'react';
import PropTypes from 'prop-types';
import ControlsButton from './controls-button.jsx';
import './controls.css';


const ResControls = ({ addNotesData, notesContent }) => (
    <div className="controls">
        <ControlsButton
            text="Notiz Hinzufügen"
            onClick={addNotesData}
        />
    </div>
);

ResControls.propTypes = {
    addNotesData: PropTypes.func.isRequired,
};

export default ResControls;
