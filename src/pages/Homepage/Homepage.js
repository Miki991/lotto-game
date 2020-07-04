import React from 'react';
import './Homepage.scss';
import { connect } from 'react-redux';

import AllNumbers from '../../components/AllNumbers';
import Chosen from '../../components/Chosen';
import WinningCombination from '../../components/WinningCombination';
import ButtonChooseNumbers from '../../components/ButtonChooseNumbers';
import ButtonGetWinningCombination from '../../components/ButtonGetWinningCombination';

const Homepage = (props) => {
    const lottoNumbers = 6;

    const getRandomNumbers = (arr) => {
        let numsAvailable = [...props.allNumbers];
        let highestIndex = 48;

        // Getting random numbers
        for (let i = 0; i < lottoNumbers; i++) {
            let num = numsAvailable[Math.round(Math.random() * highestIndex)];
            arr.push(num);

            // Removing number from array of available numbers
            const random = numsAvailable.findIndex(number => number === num);
            numsAvailable.splice(random, 1);
            
            // Lowering total numbers available by one
            highestIndex--;
        }

        // Sorting numbers in ascending order
        arr.sort((a, b) => a - b);
    }

    return (
        <div className="homepage">
            <h1>Lotto</h1>
            <AllNumbers />

            {props.numbersChosenSet ? 
                null : <ButtonChooseNumbers getRandomNumbers={getRandomNumbers} />
            }

            { props.numbersChosenSet ? <Chosen /> : null }

            {props.numbersChosenSet && !props.winningNumbersSet ?
                <ButtonGetWinningCombination getRandomNumbers={getRandomNumbers} /> : null
            }

            { props.winningNumbersSet ? <WinningCombination /> : null }
        </div>
    )
}

const mapStateToProps = state => ({
    allNumbers: state.allNumbers,
    numbersChosenSet: state.numbersChosenSet,
    winningNumbersSet: state.winningNumbersSet
});

export default connect(mapStateToProps, null)(Homepage);