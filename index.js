'use strict';

/**
 * Adds commas to a number
 * @param  {number} number
 * @param  {number} locale
 * @return {string}       
 */
module.exports = function(number, locale) {
    return number.toLocaleString(locale);
}
