import React from 'react';
import { connect } from 'react-redux';
import { 
    setChosenNumbers, 
    setWinningNumbers, 
    setWinningNumbersSet, 
    setNumbersChosenSet
} from '../store/actionTypes';
import PropTypes from 'prop-types';

const WinningCombination = props => {
    const getScore = () => {
        let number = 0;

        // Getting number of matching numbers from both winning numbers and chosen numbers array 
        for (let winningNum of props.winningNumbers) {
            for (let chosenNum of props.chosenNumbers) {
                if (chosenNum === winningNum) {
                    number += 1;
                }
            }
        }

        const match = number === 1 ? `${number} match!` : `${number} matches!`;

        return match;
    }

    const restartGame = () => {
        props.setNumbersChosenSet(false);
        props.setWinningNumbersSet(false);

        props.setChosenNumbers([]);
        props.setWinningNumbers([]);
    }

    return (
        <div className="winning-numbers-section">
            <h2>Winning combination</h2>
            <div className="nums-wrapper winning-numbers">
                {props.winningNumbers.map(num => (
                    <div className='num winning-number' key={num}>
                        <span>{num}</span>
                    </div>
                ))}
            </div>
            <div className="score">
                Score: {getScore()}
            </div>
            <button className="play-btn" onClick={restartGame}>
                PLAY AGAIN
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    chosenNumbers: state.chosenNumbers,
    winningNumbers: state.winningNumbers
});

const mapDispatchToProps = dispatch => ({
    setChosenNumbers: (chosenNumbers) => dispatch({
        type: setChosenNumbers,
        chosenNumbers
    }),
    setWinningNumbers: (winningNumbers) => dispatch({
        type: setWinningNumbers,
        winningNumbers
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

WinningCombination.propTypes = {
    chosenNumbers: PropTypes.array.isRequired,
    winningNumbers: PropTypes.array.isRequired,
    setNumbersChosenSet: PropTypes.func.isRequired,
    setWinningNumbersSet: PropTypes.func.isRequired,
    setChosenNumbers: PropTypes.func.isRequired,
    setWinningNumbers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(WinningCombination));