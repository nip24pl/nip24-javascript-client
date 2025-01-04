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
 * Whitelist status info
 */
function WLStatus()
{
	this.uid = undefined;

	this.nip = undefined;
	this.iban = undefined;

	this.valid = undefined;
	this.virtual = undefined;

	this.vatStatus = undefined;
	this.vatResult = undefined;

	this.hashIndex = undefined;
	this.maskIndex = undefined;
	this.date = undefined;
	this.source = undefined;
}

/**
 * String representation
 * @return {string} object info
 */
WLStatus.prototype.toString = function() {
	return 'WLStatus: [uid = ' + this.uid
		+ ', nip = ' + this.nip
		+ ', iban = ' + this.iban
		+ ', valid = ' + this.valid
		+ ', virtual = ' + this.virtual
		+ ', vatStatus = ' + this.vatStatus
		+ ', vatResult = ' + this.vatResult
		+ ', hashIndex = ' + this.hashIndex
		+ ', maskIndex = ' + this.maskIndex
		+ ', date = ' + this.date
		+ ', source = ' + this.source
		+ ']';
};

module.exports = {
	NOT_REGISTERED: 1,
	ACTIVE: 2,
	EXEMPTED: 3,

	WLStatus: WLStatus
};
