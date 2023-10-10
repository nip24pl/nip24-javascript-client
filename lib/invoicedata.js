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
 * Invoice data
 */
function InvoiceData()
{
	this.uid = undefined;

	this.nip = undefined;

	this.name = undefined;
	this.firstName = undefined;
	this.lastName = undefined;

	this.street = undefined;
	this.streetNumber = undefined;
	this.houseNumber = undefined;
	this.city = undefined;
	this.postCode = undefined;
	this.postCity = undefined;

	this.phone = undefined;
	this.email = undefined;
	this.www = undefined;
}

/**
 * String representation
 * @return {string} object info
 */
InvoiceData.prototype.toString = function() {
	return 'InvoiceData: [uid = ' + this.uid
		+ ', nip = ' + this.nip
		+ ', name = ' + this.name
		+ ', firstName = ' + this.firstName
		+ ', lastName = ' + this.lastName

		+ ', street = ' + this.street
		+ ', streetNumber = ' + this.streetNumber
		+ ', houseNumber = ' + this.houseNumber
		+ ', city = ' + this.city
		+ ', postCode = ' + this.postCode
		+ ', postCity = ' + this.postCity

		+ ', phone = ' + this.phone
		+ ', email = ' + this.email
		+ ', www = ' + this.www
		+ ']';
};

module.exports = InvoiceData;
