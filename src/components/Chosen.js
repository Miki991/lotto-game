import React from 'react';
import { setNumberClass } from '../appUtils';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Chosen = props => (
    <div className="chosen-numbers-section">
        <h2>My numbers</h2>
        <div className="nums-wrapper chosen-numbers">
            {props.chosenNumbers.map(num => (
                <div className={setNumberClass(num)} key={num}>
                    <span>{num}</span>
                </div>
            ))}
        </div>
    </div>
)

const mapStateToProps = state => ({
    chosenNumbers: state.chosenNumbers
});

Chosen.propTypes = {
    chosenNumbers: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(React.memo(Chosen));