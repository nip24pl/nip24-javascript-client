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
 * VAT registry entity
 */
function VATEntity()
{
	this.name = undefined;
	this.nip = undefined;
	this.regon = undefined;
	this.krs = undefined;

	this.residenceAddress = undefined;
	this.workingAddress = undefined;

	this.vatStatus = undefined;
	this.vatResult = undefined;

	this.representatives = [];
	this.authorizedClerks = [];
	this.partners = [];

	this.ibans = [];
	this.hasVirtualAccounts = undefined;

	this.registrationLegalDate = undefined;
	this.registrationDenialDate = undefined;
	this.registrationDenialBasis = undefined;
	this.restorationDate = undefined;
	this.restorationBasis = undefined;
	this.removalDate = undefined;
	this.removalBasis = undefined;
}

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

module.exports = {
	NOT_REGISTERED: 1,
	ACTIVE: 2,
	EXEMPTED: 3,

	VATEntity: VATEntity
};
