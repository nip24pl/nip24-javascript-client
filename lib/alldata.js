/**
 * Copyright 2015-2022 NETCAT (www.netcat.pl)
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
 * @copyright 2015-2022 NETCAT (www.netcat.pl)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';


/**
 * All firm data
 */
function AllData()
{
	this.uid = undefined;

	this.nip = undefined;
	this.regon = undefined;
	this.type = undefined;

	this.name = undefined;
	this.shortName = undefined;
	this.firstName = undefined;
	this.secondName = undefined;
	this.lastName = undefined;

	this.street = undefined;
	this.streetCode = undefined;
	this.streetNumber = undefined;
	this.houseNumber = undefined;
	this.city = undefined;
	this.cityCode = undefined;
	this.community = undefined;
	this.communityCode = undefined;
	this.county = undefined;
	this.countyCode = undefined;
	this.state = undefined;
	this.stateCode = undefined;
	this.postCode = undefined;
	this.postCity = undefined;

	this.phone = undefined;
	this.email = undefined;
	this.www = undefined;

	this.creationDate = undefined;
	this.startDate = undefined;
	this.registrationDate = undefined;
	this.holdDate = undefined;
	this.renevalDate = undefined;
	this.lastUpdateDate = undefined;
	this.endDate = undefined;

	this.registryEntityCode = undefined;
	this.registryEntityName = undefined;

	this.registryCode = undefined;
	this.registryName = undefined;

	this.recordCreationDate = undefined;
	this.recordNumber = undefined;

	this.basicLegalFormCode = undefined;
	this.basicLegalFormName = undefined;

	this.specificLegalFormCode = undefined;
	this.specificLegalFormName = undefined;

	this.ownershipFormCode = undefined;
	this.ownershipFormName = undefined;

	this.pkd = [];
}

/**
 * String representation
 * @return {string} object info
 */
AllData.prototype.toString = function() {
	return 'AllData: [uid = ' + this.uid
		+ ', nip = ' + this.nip
		+ ', regon = ' + this.regon
		+ ', type = ' + this.type

		+ ', name = ' + this.name
		+ ', shortName = ' + this.shortName
		+ ', firstName = ' + this.firstName
		+ ', secondName = ' + this.secondName
		+ ', lastName = ' + this.lastName

		+ ', street = ' + this.street
		+ ', streetCode = ' + this.streetCode
		+ ', streetNumber = ' + this.streetNumber
		+ ', houseNumber = ' + this.houseNumber
		+ ', city = ' + this.city
		+ ', cityCode = ' + this.cityCode
		+ ', community = ' + this.community
		+ ', communityCode = ' + this.communityCode
		+ ', county = ' + this.county
		+ ', countyCode = ' + this.countyCode
		+ ', state = ' + this.state
		+ ', stateCode = ' + this.stateCode
		+ ', postCode = ' + this.postCode
		+ ', postCity = ' + this.postCity

		+ ', phone = ' + this.phone
		+ ', email = ' + this.email
		+ ', www = ' + this.www

		+ ', creationDate = ' + this.creationDate
		+ ', startDate = ' + this.startDate
		+ ', registrationDate = ' + this.registrationDate
		+ ', holdDate = ' + this.holdDate
		+ ', renevalDate = ' + this.renevalDate
		+ ', lastUpdateDate = ' + this.lastUpdateDate
		+ ', endDate = ' + this.endDate

		+ ', registryEntityCode = ' + this.registryEntityCode
		+ ', registryEntityName = ' + this.registryEntityName

		+ ', registryCode = ' + this.registryCode
		+ ', registryName = ' + this.registryName

		+ ', recordCreationDate = ' + this.recordCreationDate
		+ ', recordNumber = ' + this.recordNumber

		+ ', basicLegalFormCode = ' + this.basicLegalFormCode
		+ ', basicLegalFormName = ' + this.basicLegalFormName

		+ ', specificLegalFormCode = ' + this.specificLegalFormCode
		+ ', specificLegalFormName = ' + this.specificLegalFormName

		+ ', ownershipFormCode = ' + this.ownershipFormCode
		+ ', ownershipFormName = ' + this.ownershipFormName

		+ ', pkd = [' + this.pkd + ']'
		+ ']';
};

module.exports = AllData;
