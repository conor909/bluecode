import checksum, { getOddPositions, getEvenPositions, getSum} from './checksum';

it('checksum returns correct value as per documentation', () => {
    expect(checksum('8533218192162301367')).toEqual(3);
});

it('filter odd positions', () => {
    expect(getOddPositions([1, 2, 3, 4, 5])).toEqual([2,4]);
});

it('filter even positions', () => {
    expect(getEvenPositions([1, 2, 3, 4, 5])).toEqual([1,3,5]);
});

it('check for sumOf', () => {
    expect(getSum([2,2,2,2,2,2])).toEqual(12);
});