import React from 'react';
import { connect } from 'react-redux';
import { setChosenNumbers, setNumbersChosenSet, setWinningNumbersSet } from '../store/actionTypes';
import PropTypes from 'prop-types';

const ButtonChooseNumbers = props => {
    const getChosenNumbersCombination = () => {
        let chosenNums = [];
        props.getRandomNumbers(chosenNums);

        props.setChosenNumbers(chosenNums);
        props.setNumbersChosenSet(true);
        props.setWinningNumbersSet(false);
    }

    return (
        <button
            className="play-btn"
            onClick={getChosenNumbersCombination}
        >CHOOSE NUMBERS</button>
    )
}

const mapDispatchToProps = dispatch => ({
    setChosenNumbers: (chosenNumbers) => dispatch({
        type: setChosenNumbers,
        chosenNumbers
    }),
    setNumbersChosenSet: (value) => dispatch({
        type: setNumbersChosenSet,
        value
    }),
    setWinningNumbersSet: (value) => dispatch({
        type: setWinningNumbersSet,
        value
    })
});

ButtonChooseNumbers.propTypes = {
    getRandomNumbers: PropTypes.func.isRequired,
    setChosenNumbers: PropTypes.func.isRequired,
    setNumbersChosenSet: PropTypes.func.isRequired,
    setWinningNumbersSet: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(React.memo(ButtonChooseNumbers));