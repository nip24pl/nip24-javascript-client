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

const VATPerson = require('./vatperson');

/**
 * VAT registry entity
 */
function VATEntity()
{
    /**
     * @type {string}
     */
	this.name = undefined;

    /**
     * @type {string}
     */
	this.nip = undefined;

    /**
     * @type {string}
     */
	this.regon = undefined;

    /**
     * @type {string}
     */
	this.krs = undefined;

    /**
     * @type {string}
     */
	this.residenceAddress = undefined;

    /**
     * @type {string}
     */
	this.workingAddress = undefined;

    /**
     * @type {number}
     */
	this.vatStatus = undefined;

    /**
     * @type {string}
     */
	this.vatResult = undefined;

    /**
     * @type {VATPerson[]}
     */
	this.representatives = [];

    /**
     * @type {VATPerson[]}
     */
	this.authorizedClerks = [];

    /**
     * @type {VATPerson[]}
     */
	this.partners = [];

    /**
     * @type {string[]}
     */
	this.ibans = [];

    /**
     * @type {boolean}
     */
	this.hasVirtualAccounts = undefined;

    /**
     * @type {Date}
     */
	this.registrationLegalDate = undefined;

    /**
     * @type {Date}
     */
	this.registrationDenialDate = undefined;

    /**
     * @type {string}
     */
	this.registrationDenialBasis = undefined;

    /**
     * @type {Date}
     */
	this.restorationDate = undefined;

    /**
     * @type {string}
     */
	this.restorationBasis = undefined;

    /**
     * @type {Date}
     */
	this.removalDate = undefined;

    /**
     * @type {string}
     */
	this.removalBasis = undefined;
}

VATEntity.prototype.NOT_REGISTERED = 1;
VATEntity.prototype.ACTIVE = 2;
VATEntity.prototype.EXEMPTED = 3;

/**
 * String representation
 * @return {string} object info
 */
VATEntity.prototype.toString = function() {
	return 'VATEntity: [name = ' + this.name
		+ ', nip = ' + this.nip
		+ ', regon = ' + this.regon
		+ ', krs = ' + this.krs
		+ ', residenceAddress = ' + this.residenceAddress
		+ ', workingAddress = ' + this.workingAddress
		+ ', vatStatus = ' + this.vatStatus
		+ ', vatResult = ' + this.vatResult
		+ ', representatives = [' + this.representatives + ']'
		+ ', authorizedClerks = [' + this.authorizedClerks + ']'
		+ ', partners = [' + this.partners + ']'
		+ ', ibans = [' + this.ibans + ']'
		+ ', hasVirtualAccounts = ' + this.hasVirtualAccounts
		+ ', registrationLegalDate = ' + this.registrationLegalDate
		+ ', registrationDenialDate = ' + this.registrationDenialDate
		+ ', registrationDenialBasis = ' + this.registrationDenialBasis
		+ ', restorationDate = ' + this.restorationDate
		+ ', restorationBasis = ' + this.restorationBasis
		+ ', removalDate = ' + this.removalDate
		+ ', removalBasis = ' + this.removalBasis
		+ ']';
};

module.exports = VATEntity;
