export const setNumberClass = (num) => {
    if (num < 10) {
        return 'num gray';
    } else if (num >= 10 && num < 20) {
        return 'num blue';
    } else if (num >= 20 && num < 30) {
        return 'num pink';
    } else if (num >= 30 && num < 40) {
        return 'num green';
    } else if (num >= 40 && num < 50) {
        return 'num yellow';
    } else {
        return 'num';
    } 
}
