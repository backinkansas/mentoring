const VALUE_BY_LETTER = {
    0: [''],
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
}

const SERIALIZED_KEYS_POINTS = Object.keys(VALUE_BY_LETTER)

function formatUpperCase(string) {
    return string.toUpperCase()
}

function arrayFrom(string) {
    return Array.from(string)
}

function isIncluded(array, character) {
    return VALUE_BY_LETTER[array].includes(character)
}

function numbersFrom(array) {
    return array.map(string => parseInt(string))
}

function marksPoint(char) {
    return SERIALIZED_KEYS_POINTS.find(keys => isIncluded(keys, char))
}

function finalSum(array) {
    return array.reduce((sum, item) => sum + item, 0)
}

module.exports = function scoreBy(word) {
    const chars = arrayFrom(formatUpperCase(word))
    const serializedPoints = chars.map(char => marksPoint(char))
    
    return finalSum(numbersFrom(serializedPoints))
}
