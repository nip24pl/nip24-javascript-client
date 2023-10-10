/**
 * Copyright 2015-2023 NETCAT (www.netcat.pl)
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
 * @copyright 2015-2023 NETCAT (www.netcat.pl)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';


/**
 * Normalizes form of the NIP number
 * @param {string} nip input string
 * @return {string} normalized number
 */
function normalize(nip)
{
	if (!nip) {
		return undefined;
	}

	nip = nip.replace(/[ -]/g, '').trim();

	if (nip.search(/^[0-9]{10}$/) === -1) {
		return undefined;
	}

	return nip;
}

/**
 * Checks if specified NIP is valid
 * @param {string} nip input number
 * @return {boolean} true if number is valid
 */
function isValid(nip)
{
	if (!(nip = normalize(nip))) {
		return false;
	}

	const w = [6, 5, 7, 2, 3, 4, 5, 6, 7];
	let sum = 0;

	for (let i = 0; i < w.length; i++) {
		sum += parseInt(nip[i]) * w[i];
	}

	sum %= 11;

	if (sum !== parseInt(nip[9])) {
		return false;
	}

	return true;
}

module.exports = {
	normalize: normalize,
	isValid: isValid
};
