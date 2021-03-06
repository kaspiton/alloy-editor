/**
 * © 2014 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

/**
 * Provides core language utilities.
 *
 * @class Lang
 */
const Lang = {
	/**
	 * Check if the passed value is an array.
	 *
	 * @memberof Lang
	 * @method isArray
	 * @param {Any} value The value which have to be checked.
	 * @return {Boolean} True if the passed value is an array, false otherwise.
	 * @static
	 */
	isArray(value) {
		return Object.prototype.toString.call(value) === '[object Array]';
	},

	/**
	 * Check if the passed value is boolean.
	 *
	 * @memberof Lang
	 * @method isBoolean
	 * @param {Any} value The value which have to be checked.
	 * @return {Boolean} True if the passed value is boolean, false otherwise.
	 * @static
	 */
	isBoolean(value) {
		return typeof value === 'boolean';
	},

	/**
	 * Check if the passed value is a function.
	 *
	 * @memberof Lang
	 * @method isFunction
	 * @param {Any} value The value which have to be checked.
	 * @return {Boolean} True if the passed value is a function, false otherwise.
	 * @static
	 */
	isFunction(value) {
		return typeof value === 'function';
	},

	/**
	 * Check if the passed value is NULL.
	 *
	 * @memberof Lang
	 * @method isNull
	 * @param {Any} value The value which have to be checked.
	 * @return {Boolean} True if the passed value is NULL, false otherwise.
	 * @static
	 */
	isNull(value) {
		return value === null;
	},

	/**
	 * Check if the passed value is number.
	 *
	 * @memberof Lang
	 * @method isNumber
	 * @param {Any} value The value which have to be checked.
	 * @return {Boolean} True if the passed value is number, false otherwise.
	 * @static
	 */
	isNumber(value) {
		return typeof value === 'number' && isFinite(value);
	},

	/**
	 * Check if the passed value is an object
	 *
	 * @memberof Lang
	 * @method isObject
	 * @param {Any} value The value which have to be checked.
	 * @return {Boolean} True if the passed value is an object, false otherwise.
	 * @static
	 */
	isObject(value) {
		const valueType = typeof value;

		return value && (valueType === 'object' || Lang.isFunction(value));
	},

	/**
	 * Check if the passed value is a string.
	 *
	 * @memberof Lang
	 * @method isString
	 * @param {Any} value The value which have to be checked.
	 * @return {Boolean} True if the passed value is a string, false otherwise.
	 * @static
	 */
	isString(value) {
		return typeof value === 'string';
	},

	/**
	 * Adds all properties from the supplier to the receiver.
	 * The function will add all properties, not only these owned by the supplier.
	 *
	 * @memberof Lang
	 * @method mix
	 * @param {Object} receiver The object which will receive properties.
	 * @param {Object} supplier The object which provides properties.
	 * @return {Object} The modified receiver.
	 * @static
	 */
	mix(receiver, supplier) {
		const hasOwnProperty = Object.prototype.hasOwnProperty;

		for (const key in supplier) {
			if (hasOwnProperty.call(supplier, key)) {
				receiver[key] = supplier[key];
			}
		}
	},

	/**
	 * Converts value to Integer.
	 *
	 * @memberof Lang
	 * @method toInt
	 * @param {Any} value The value which have to be converted to Integer.
	 * @return {Integer} The converted value.
	 * @static
	 */
	toInt(value) {
		return parseInt(value, 10);
	},
};

export default Lang;
