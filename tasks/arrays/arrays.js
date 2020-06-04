/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
    const array1 = chars.map((e1, i, chars) => e1.name);
    return array1;
}

/**
 * print (console.log) ids of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    chars.forEach((a, i, chars) => {
        console.log(a.name);
    });
}

/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    const array3 = chars.filter(e1 => e1.species != "Human");
    return array3;
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    const array4 = chars.filter(b => b.name == "Jerry Smith");
    let conObj = ''
    for (let i = 0; i < array4.length; i ++){
        conObj = array4[i];
    };
    return conObj;
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    const nonHuman = c => c.species != "Human";
    return chars.every(nonHuman);
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    const arrayFishPerson = chars.some(b => b.type == "Fish-Person");
    return arrayFishPerson;
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */
function minItem(arr) {
    const minPlace = (acc, curr) => acc < curr ? acc : curr;
    const minCharacter = arr.reduce(minPlace);
    return arr.indexOf(minCharacter);
}

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
