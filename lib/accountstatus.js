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
 * Current account status information
 */
function AccountStatus()
{
    /**
     * @type {string}
     */
	this.uid = undefined;

    /**
     * @type {string}
     */
	this.type = undefined;

    /**
     * @type {Date}
     */
	this.validTo = undefined;

    /**
     * @type {string}
     */
	this.billingPlanName = undefined;

    /**
     * @type {number}
     */
	this.subscriptionPrice = undefined;

    /**
     * @type {number}
     */
	this.itemPrice = undefined;

    /**
     * @type {number}
     */
	this.itemPriceStatus = undefined;

    /**
     * @type {number}
     */
	this.itemPriceInvoice = undefined;

    /**
     * @type {number}
     */
	this.itemPriceAll = undefined;

    /**
     * @type {number}
     */
	this.itemPriceIBAN = undefined;

    /**
     * @type {number}
     */
	this.itemPriceWhitelist = undefined;

    /**
     * @type {number}
     */
	this.itemPriceSearchVAT = undefined;

    /**
     * @type {number}
     */
	this.limit = undefined;

    /**
     * @type {number}
     */
	this.requestDelay = undefined;

    /**
     * @type {number}
     */
	this.domainLimit = undefined;

    /**
     * @type {boolean}
     */
	this.overPlanAllowed = undefined;

    /**
     * @type {boolean}
     */
	this.terytCodes = undefined;

    /**
     * @type {boolean}
     */
	this.excelAddIn = undefined;

    /**
     * @type {boolean}
     */
	this.jpkVat = undefined;

    /**
     * @type {boolean}
     */
	this.cli = undefined;

    /**
     * @type {boolean}
     */
	this.stats = undefined;

    /**
     * @type {boolean}
     */
	this.nipMonitor = undefined;

    /**
     * @type {boolean}
     */
	this.searchByNIP = undefined;

    /**
     * @type {boolean}
     */
	this.searchByREGON = undefined;

    /**
     * @type {boolean}
     */
	this.searchByKRS = undefined;

    /**
     * @type {boolean}
     */
	this.funcIsActive = undefined;

    /**
     * @type {boolean}
     */
	this.funcGetInvoiceData = undefined;

    /**
     * @type {boolean}
     */
	this.funcGetAllData = undefined;

    /**
     * @type {boolean}
     */
	this.funcGetVIESData = undefined;

    /**
     * @type {boolean}
     */
	this.funcGetVATStatus = undefined;

    /**
     * @type {boolean}
     */
	this.funcGetIBANStatus = undefined;

    /**
     * @type {boolean}
     */
	this.funcGetWhitelistStatus = undefined;

    /**
     * @type {boolean}
     */
	this.funcSearchVAT = undefined;

    /**
     * @type {number}
     */
	this.invoiceDataCount = undefined;

    /**
     * @type {number}
     */
	this.allDataCount = undefined;

    /**
     * @type {number}
     */
	this.firmStatusCount = undefined;

    /**
     * @type {number}
     */
	this.vatStatusCount = undefined;

    /**
     * @type {number}
     */
	this.viesStatusCount = undefined;

    /**
     * @type {number}
     */
	this.ibanStatusCount = undefined;

    /**
     * @type {number}
     */
	this.whitelistStatusCount = undefined;

    /**
     * @type {number}
     */
	this.searchVATCount = undefined;

    /**
     * @type {number}
     */
	this.totalCount = undefined;
}

/**
 * String representation
 * @return {string} object info
 */
AccountStatus.prototype.toString = function() {
	return 'AccountStatus: [uid = ' + this.uid
		+ ', type = ' + this.type
		+ ', validTo = ' + this.validTo
		+ ', billingPlanName = ' + this.billingPlanName

		+ ', subscriptionPrice = ' + this.subscriptionPrice
		+ ', itemPrice = ' + this.itemPrice
		+ ', itemPriceStatus = ' + this.itemPriceStatus
		+ ', itemPriceInvoice = ' + this.itemPriceInvoice
		+ ', itemPriceAll = ' + this.itemPriceAll
		+ ', itemPriceIBAN = ' + this.itemPriceIBAN
		+ ', itemPriceWhitelist = ' + this.itemPriceWhitelist
		+ ', itemPriceSearchVAT = ' + this.itemPriceSearchVAT

		+ ', limit = ' + this.limit
		+ ', requestDelay = ' + this.requestDelay
		+ ', domainLimit = ' + this.domainLimit

		+ ', overPlanAllowed = ' + this.overPlanAllowed
		+ ', terytCodes = ' + this.terytCodes
		+ ', excelAddIn = ' + this.excelAddIn
		+ ', jpkVat = ' + this.jpkVat
		+ ', cli = ' + this.cli
		+ ', stats = ' + this.stats
		+ ', NIPMonitor = ' + this.nipMonitor

		+ ', searchByNIP = ' + this.searchByNIP
		+ ', searchByREGON = ' + this.searchByREGON
		+ ', searchByKRS = ' + this.searchByKRS

		+ ', funcIsActive = ' + this.funcIsActive
		+ ', funcGetInvoiceData = ' + this.funcGetInvoiceData
		+ ', funcGetAllData = ' + this.funcGetAllData
		+ ', funcGetVIESData = ' + this.funcGetVIESData
		+ ', funcGetVATStatus = ' + this.funcGetVATStatus
		+ ', funcGetIBANStatus = ' + this.funcGetIBANStatus
		+ ', funcGetWhitelistStatus = ' + this.funcGetWhitelistStatus
		+ ', funcSearchVAT = ' + this.funcSearchVAT

		+ ', invoiceDataCount = ' + this.invoiceDataCount
		+ ', allDataCount = ' + this.allDataCount
		+ ', firmStatusCount = ' + this.firmStatusCount
		+ ', VATStatusCount = ' + this.vatStatusCount
		+ ', VIESStatusCount = ' + this.viesStatusCount
		+ ', IBANStatusCount = ' + this.ibanStatusCount
		+ ', whitelistStatusCount = ' + this.whitelistStatusCount
		+ ', searchVATCount = ' + this.searchVATCount
		+ ', totalCount = ' + this.totalCount
		+ ']';
};

module.exports = AccountStatus;
