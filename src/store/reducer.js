import { 
    setAllNumbers, 
    setChosenNumbers, 
    setWinningNumbers, 
    setWinningNumbersSet, 
    setNumbersChosenSet 
} from "./actionTypes";

const store = {
    allNumbers: [],
    chosenNumbers: [],
    winningNumbers: [],
    numbersChosenSet: false,
    winningNumbersSet: false
}

export const reducer = (state = store, action) => {
    switch(action.type) {
        case setAllNumbers:
            return {
                ...state,
                allNumbers: action.allNumbers
            }
        case setChosenNumbers:
            return {
                ...state,
                chosenNumbers: action.chosenNumbers
            }
        case setWinningNumbers:
            return {
                ...state,
                winningNumbers: action.winningNumbers
            }
        case setNumbersChosenSet:
            return {
                ...state,
                numbersChosenSet: action.value
            }
        case setWinningNumbersSet:
            return {
                ...state,
                winningNumbersSet: action.value
            }
        default:
            return state;
    }
}