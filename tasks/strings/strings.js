/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str) {
  if (str == Number(str)){
    return 'This is not a string!';
  } else {
  return str.split('').reverse().join('');
  }
}

/**
 * 1. Calculate a century by given year
 * if a number is passed
* @param {number} year
*/
function centuryFromYear(year) {
  let arrayNew = year.toString();
  let num = arrayNew.slice(0,2);
  let num2 = arrayNew.slice(2,4);
  let num3 = num + '.' + num2;
  let num4 = Number(num3);
  return Math.ceil(num4);
}

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
  let result = new RegExp (char, 'g');
  let arrayResult = str.match(result);
  if (arrayResult != null){
    return arrayResult.length;
  } else {
  return 0;
  }  
}

/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  if (str.length > num) {
    let str1 = str.slice(0,num);
    let str2 = str1 + '...';
    return str2;
  } else {
    return str;
  }
}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  const newEl = text.replace(/10/g, "ten");
  return newEl;
}

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  const newElem = text.replace(/\[\w*\]/g, "[CONFIDENTIAL]");
  return newElem;
}

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};
