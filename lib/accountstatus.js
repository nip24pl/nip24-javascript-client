/**
 * Copyright 2015-2020 NETCAT (www.netcat.pl)
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
 * @copyright 2015-2020 NETCAT (www.netcat.pl)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';


/**
 * Current account status information
 */
function AccountStatus()
{
	this.uid = undefined;

	this.type = undefined;
	this.validTo = undefined;
	this.billingPlanName = undefined;

	this.subscriptionPrice = undefined;
	this.itemPrice = undefined;
	this.itemPriceStatus = undefined;
	this.itemPriceInvoice = undefined;
	this.itemPriceAll = undefined;
	this.itemPriceIBAN = undefined;
	this.itemPriceWhitelist = undefined;
	this.itemPriceSearchVAT = undefined;

	this.limit = undefined;
	this.requestDelay = undefined;
	this.domainLimit = undefined;

	this.overPlanAllowed = undefined;
	this.terytCodes = undefined;
	this.excelAddIn = undefined;
	this.jpkVat = undefined;
	this.cli = undefined;
	this.stats = undefined;
	this.nipMonitor = undefined;

	this.searchByNIP = undefined;
	this.searchByREGON = undefined;
	this.searchByKRS = undefined;

	this.funcIsActive = undefined;
	this.funcGetInvoiceData = undefined;
	this.funcGetAllData = undefined;
	this.funcGetVIESData = undefined;
	this.funcGetVATStatus = undefined;
	this.funcGetIBANStatus = undefined;
	this.funcGetWhitelistStatus = undefined;
	this.funcSearchVAT = undefined;

	this.invoiceDataCount = undefined;
	this.allDataCount = undefined;
	this.firmStatusCount = undefined;
	this.vatStatusCount = undefined;
	this.viesStatusCount = undefined;
	this.ibanStatusCount = undefined;
	this.whitelistStatusCount = undefined;
	this.searchVATCount = undefined;
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
