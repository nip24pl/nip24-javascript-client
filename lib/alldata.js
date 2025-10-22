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

const BusinessPartner = require('./businesspartner');
const PKD = require('./pkd');

/**
 * All firm data
 */
function AllData()
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
	this.regon = undefined;

    /**
     * @type {string}
     */
	this.type = undefined;

    /**
     * @type {string}
     */
	this.name = undefined;

    /**
     * @type {string}
     */
	this.shortName = undefined;

    /**
     * @type {string}
     */
	this.firstName = undefined;

    /**
     * @type {string}
     */
	this.secondName = undefined;

    /**
     * @type {string}
     */
	this.lastName = undefined;

    /**
     * @type {string}
     */
	this.street = undefined;

    /**
     * @type {string}
     */
	this.streetCode = undefined;

    /**
     * @type {string}
     */
	this.streetNumber = undefined;

    /**
     * @type {string}
     */
	this.houseNumber = undefined;

    /**
     * @type {string}
     */
	this.city = undefined;

    /**
     * @type {string}
     */
	this.cityCode = undefined;

    /**
     * @type {string}
     */
	this.community = undefined;

    /**
     * @type {string}
     */
	this.communityCode = undefined;

    /**
     * @type {string}
     */
	this.county = undefined;

    /**
     * @type {string}
     */
	this.countyCode = undefined;

    /**
     * @type {string}
     */
	this.state = undefined;

    /**
     * @type {string}
     */
	this.stateCode = undefined;

    /**
     * @type {string}
     */
	this.postCode = undefined;

    /**
     * @type {string}
     */
	this.postCity = undefined;

    /**
     * @type {string}
     */
	this.phone = undefined;

    /**
     * @type {string}
     */
	this.email = undefined;

    /**
     * @type {string}
     */
	this.www = undefined;

    /**
     * @type {Date}
     */
	this.creationDate = undefined;

    /**
     * @type {Date}
     */
	this.startDate = undefined;

    /**
     * @type {Date}
     */
	this.registrationDate = undefined;

    /**
     * @type {Date}
     */
	this.holdDate = undefined;

    /**
     * @type {Date}
     */
	this.renevalDate = undefined;

    /**
     * @type {Date}
     */
	this.lastUpdateDate = undefined;

    /**
     * @type {Date}
     */
    this.bankruptcyDate = undefined;

    /**
     * @type {Date}
     */
    this.endOfBankruptcyProceedingsDate = undefined;

    /**
     * @type {Date}
     */
	this.endDate = undefined;

    /**
     * @type {string}
     */
	this.registryEntityCode = undefined;

    /**
     * @type {string}
     */
	this.registryEntityName = undefined;

    /**
     * @type {string}
     */
	this.registryCode = undefined;

    /**
     * @type {string}
     */
	this.registryName = undefined;

    /**
     * @type {Date}
     */
	this.recordCreationDate = undefined;

    /**
     * @type {string}
     */
	this.recordNumber = undefined;

    /**
     * @type {string}
     */
	this.basicLegalFormCode = undefined;

    /**
     * @type {string}
     */
	this.basicLegalFormName = undefined;

    /**
     * @type {string}
     */
	this.specificLegalFormCode = undefined;

    /**
     * @type {string}
     */
	this.specificLegalFormName = undefined;

    /**
     * @type {string}
     */
	this.ownershipFormCode = undefined;

    /**
     * @type {string}
     */
	this.ownershipFormName = undefined;

    /**
     * @type {BusinessPartner[]}
     */
	this.businessPartner = [];

    /**
     * @type {PKD[]}
     */
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
        + ', bankruptcyDate = ' + this.bankruptcyDate
        + ', endOfBankruptcyProceedingsDate = ' + this.endOfBankruptcyProceedingsDate
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

		+ ', businessPartner = [' + this.businessPartner + ']'
		+ ', pkd = [' + this.pkd + ']'
		+ ']';
};

module.exports = AllData;
