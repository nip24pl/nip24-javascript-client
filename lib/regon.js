/**
 * Copyright 2015-2025 NETCAT (www.netcat.pl)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author NETCAT <firma@netcat.pl>
 * @copyright 2015-2025 NETCAT (www.netcat.pl)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';


/**
 * Normalizes form of the REGON number
 * @param {string} regon input string
 * @return {string} normalized number
 */
function normalize(regon)
{
	if (!regon) {
		return undefined;
	}

	regon = regon.trim();

	if (regon.search(/^[0-9]{9,14}$/) === -1) {
		return undefined;
	}

	if (regon.length !== 9 && regon.length !== 14) {
		return undefined;
	}

	return regon;
}

/**
 * Check 9-digit REGON number
 * @param {string} regon input number
 * @return {boolean} true if number is valid
 */
function isValidR9(regon)
{
	const w = [8, 9, 2, 3, 4, 5, 6, 7];
	let sum = 0;

	for (let i = 0; i < w.length; i++) {
		sum += parseInt(regon[i]) * w[i];
	}

	sum %= 11;

	if (sum === 10) {
		sum = 0;
	}

	if (sum !== parseInt(regon[8])) {
		return false;
	}

	return true;
}

/**
 * Check 9-digit REGON number
 * @param {string} regon input number
 * @return {boolean} true if number is valid
 */
function isValidR14(regon)
{
	const w = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
	let sum = 0;

	for (let i = 0; i < w.length; i++) {
		sum += parseInt(regon[i]) * w[i];
	}

	sum %= 11;

	if (sum === 10) {
		sum = 0;
	}

	if (sum !== parseInt(regon[13])) {
		return false;
	}

	return true;
}

/**
 * Checks if specified REGON is valid
 * @param {string} regon input number
 * @return {boolean} true if number is valid
 */
function isValid(regon)
{
	if (!(regon = normalize(regon))) {
		return false;
	}

	if (regon.length === 9) {
		return isValidR9(regon);
	}
	else {
		if (!isValidR9(regon.substring(0, 9))) {
			return false;
		}

		return isValidR14(regon);
	}
}

module.exports = {
	normalize: normalize,
	isValid: isValid
};
