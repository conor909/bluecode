export const getOddPositions = (array) => {
    return array.filter((num, i) => (i % 2) === 1);
}

export const getEvenPositions = (array) => {
    return array.filter((num, i) => (i % 2) !== 1);
}

export const getSum = (array) => {
    return array.reduce((total, num) => total + parseInt(num), 0);
}

export default (input) => {
    
    const inputArray = input.split('');
    
    const oddPositions = getOddPositions(inputArray);
    const evenPositions = getEvenPositions(inputArray);
    
    const oddSum = getSum(oddPositions);
    const evenSum = getSum(evenPositions)

    const check1 = oddSum * 3;
    const check2 = evenSum;
    const check3 = check1 + check2;
    const check4 = check3 % 10;
    
    const result = check4 === 0 ? check4 : 10 - check4;

    return result; 
}