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
    /**
     * @type {string}
     */
	this.uid = undefined;

    /**
     * @type {string}
     */
	this.nip = undefined;

    /**
     * @type {string}
     */
	this.iban = undefined;

    /**
     * @type {boolean}
     */
	this.valid = undefined;

    /**
     * @type {boolean}
     */
	this.virtual = undefined;

    /**
     * @type {number}
     */
	this.vatStatus = undefined;

    /**
     * @type {string}
     */
	this.vatResult = undefined;

    /**
     * @type {number}
     */
	this.hashIndex = undefined;

    /**
     * @type {number}
     */
	this.maskIndex = undefined;

    /**
     * @type {Date}
     */
	this.date = undefined;

    /**
     * @type {string}
     */
	this.source = undefined;
}

WLStatus.prototype.NOT_REGISTERED = 1;
WLStatus.prototype.ACTIVE = 2;
WLStatus.prototype.EXEMPTED = 3;

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

module.exports = WLStatus;
