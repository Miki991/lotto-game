import React from 'react';
import { setNumberClass } from '../appUtils';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AllNumbers = props => (
    <div className="nums-wrapper all-numbers">
        {props.allNumbers.map(num => (
            <div
                key={num}
                className={setNumberClass(num)}
                data-num={num}
            >
                <span>{num}</span>
            </div>
        ))}
    </div>
);

const mapStateToProps = state => ({
    allNumbers: state.allNumbers
});

AllNumbers.propTypes = {
    allNumbers: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(React.memo(AllNumbers));