import React from 'react';
import { connect } from 'react-redux';
import { setWinningNumbers, setWinningNumbersSet } from '../store/actionTypes';
import PropTypes from 'prop-types';

const ButtonGetWinningCombination = props => {
    const getWinningCombination = () => {
        let winning = [];
        props.getRandomNumbers(winning);

        props.setWinningNumbers(winning);
        props.setWinningNumbersSet(true);
    }

    return (
        <button
            className="play-btn"
            onClick={getWinningCombination}
        >GET WINNING COMBINATION</button>
    )
}

const mapDispatchToProps = dispatch => ({
    setWinningNumbers: (winningNumbers) => dispatch({
        type: setWinningNumbers,
        winningNumbers
    }),
    setWinningNumbersSet: (value) => dispatch({
        type: setWinningNumbersSet,
        value
    })
});

ButtonGetWinningCombination.propTypes = {
    getRandomNumbers: PropTypes.func.isRequired,
    setWinningNumbers: PropTypes.func.isRequired,
    setWinningNumbersSet: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(React.memo(ButtonGetWinningCombination));