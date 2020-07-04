import React from 'react';
import { setNumberClass } from '../appUtils';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, null)(React.memo(Chosen));