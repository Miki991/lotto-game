import React from 'react';
import { connect } from 'react-redux';
import { setChosenNumbers, setNumbersChosenSet, setWinningNumbersSet } from '../store/actionTypes';

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
})

export default connect(null, mapDispatchToProps)(React.memo(ButtonChooseNumbers));