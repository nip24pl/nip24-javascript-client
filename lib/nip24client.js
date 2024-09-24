/**
 * Copyright 2015-2024 NETCAT (www.netcat.pl)
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
 * @copyright 2015-2024 NETCAT (www.netcat.pl)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

const maxios = require('axios').default;
const murl = require('url');
const mcrypto = require('crypto');
const mxmldom = require('xmldom');
const mxpath = require('xpath');
const mdatefns = require('date-fns');

const Err = require('./error');
const Number = require('./number');
const NIP = require('./nip');
const REGON = require('./regon');
const KRS = require('./krs');
const EUVAT = require('./euvat');
const IBAN = require('./iban');
const AccountStatus = require('./accountstatus');
const AllData = require('./alldata');
const BusinessPartner = require('./businesspartner');
const PKD = require('./pkd');
const IBANStatus = require('./ibanstatus');
const InvoiceData = require('./invoicedata');
const VIESData = require('./viesdata');
const SearchResult = require('./searchresult');
const VATPerson = require('./vatperson');
const VATEntity = require('./vatentity');
const VATStatus = require('./vatstatus');
const WLStatus = require('./wlstatus');


NIP24Client.prototype.VERSION = '1.3.3';

NIP24Client.prototype.PRODUCTION_URL = 'https://www.nip24.pl/api';
NIP24Client.prototype.TEST_URL = 'https://www.nip24.pl/api-test';

NIP24Client.prototype.TEST_ID = 'test_id';
NIP24Client.prototype.TEST_KEY = 'test_key';

/**
 * Construct new service client object
 * @param {string} id NIP24 key identifier
 * @param {string} key NIP24 key
 * @constructor
 */
function NIP24Client(id = undefined, key = undefined)
{
	this.url = this.TEST_URL;
	this.id = this.TEST_ID;
	this.key = this.TEST_KEY;

	if (id && key) {
		this.url = this.PRODUCTION_URL;
		this.id = id;
		this.key = key;
	}

	this.app = '';
	this.errcode = 0;
	this.err = '';
}

/**
 * Clear error
 * @param {NIP24Client} nip24 client object
 */
function clear(nip24)
{
	nip24.errcode = 0;
	nip24.err = '';
}

/**
 * Set error details
 * @param {NIP24Client} nip24 client object
 * @param {int} code error code
 * @param {string} err error message
 */
function set(nip24, code, err = undefined)
{
	nip24.errcode = code;
	nip24.err = (err ? err : Err.message(code));
}

/**
 * Prepare authorization header content
 * @param {NIP24Client} nip24 client object
 * @param {string} method HTTP method
 * @param {string} url target URL
 * @return {string} authorization header content
 */
function auth(nip24, method, url)
{
	const u = murl.parse(url);

	if (!u.port) {
        u.port = u.protocol === 'https:' ? '443' : '80';
    }

	const nonce = mcrypto.randomBytes(4).toString('hex');
	const ts = Math.round(Date.now() / 1000);

	const str = "" + ts + "\n"
		+ nonce + "\n"
		+ method + "\n"
		+ u.path + "\n"
		+ u.hostname + "\n"
		+ u.port + "\n"
		+ "\n";

	const mac = mcrypto.createHmac('sha256', nip24.key).update(str).digest('base64');

	return 'MAC id="' + nip24.id + '", ts="' + ts + '", nonce="' + nonce + '", mac="' + mac + '"';
}

/**
 * Prepare user agent information header content
 * @param {NIP24Client} nip24 client object
 * @return {string} user agent header content
 */
function userAgent(nip24)
{
	let ver = 'Unknown';

	if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
		ver = 'Browser' + window.navigator.userAgent;
	}
	else if (typeof process !== 'undefined' && process.versions != null && process.versions.node != null) {
		ver = 'NodeJS ' + process.version;
	}

    return (nip24.app ? nip24.app + ' ' : '') + 'NIP24Client/' + nip24.VERSION + ' Javascript/' + ver;
}

/**
 * Perform HTTP GET request
 * @param {NIP24Client} nip24 client object
 * @param {string} url target URL
 * @return {Promise<Document>} promise returning XML document on success
 */
function get(nip24, url)
{
	const agent = userAgent(nip24);

	return maxios.get(url, {
			headers: {
				'Accept': 'application/xml',
				'Authorization': auth(nip24, 'GET', url),
				'User-Agent': agent,
				'X-NIP24-Client': agent
			}
		}).then(response => {
			return new mxmldom.DOMParser().parseFromString(response.data);
		}).catch(e => {
			set(nip24, Err.CLI_EXCEPTION, e.message);
			throw e;
		});
}

/**
 * Get path suffix
 * @param {NIP24Client} nip24 client object
 * @param {number} type search number type as Number::xxx value
 * @param {string} number search number value
 * @return {string} path suffix
 */
function getPathSuffix(nip24, type, number)
{
	let path = undefined;

	if (type === Number.NIP) {
		if (!NIP.isValid(number)) {
			set(nip24, Err.CLI_NIP);
			return undefined;
		}

		path = 'nip/' + NIP.normalize(number);
	}
	else if (type === Number.REGON) {
		if (!REGON.isValid(number)) {
			set(nip24, Err.CLI_REGON);
			return undefined;
		}

		path = 'regon/' + REGON.normalize(number);
	}
	else if (type === Number.KRS) {
		if (!KRS.isValid(number)) {
			set(nip24, Err.CLI_KRS);
			return undefined;
		}

		path = 'krs/' + KRS.normalize(number);
	}
	else if (type === Number.EUVAT) {
		if (!EUVAT.isValid(number)) {
			set(nip24, Err.CLI_EUVAT);
			return undefined;
		}

		path = 'euvat/' + EUVAT.normalize(number);
	}
	else if (type === Number.IBAN) {
		if (!IBAN.isValid(number)) {
			number = 'PL' + number;

			if (!IBAN.isValid(number)) {
				set(nip24, Err.CLI_IBAN);
				return undefined;
			}
		}

		path = 'iban/' + IBAN.normalize(number);
	}

	return path;
}

/**
 * Get element content as text
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {string} element value
 */
function xpathString(doc, path)
{
	const nodes = mxpath.select(path, doc);

	if (!nodes) {
		return '';
	}

	if (nodes.length !== 1) {
		return '';
	}

	return nodes[0].toString().trim();
}

/**
 * Get element content as integer
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {number|undefined}
 */
function xpathInt(doc, path)
{
	const val = xpathString(doc, path);

	if (!val) {
		return undefined;
	}

	return parseInt(val);
}

/**
 * Get element content as float
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {number|undefined}
 */
function xpathFloat(doc, path)
{
	const val = xpathString(doc, path);

	if (!val) {
		return undefined;
	}

	return parseFloat(val);
}

/**
 * Get element content as date in format yyyy-mm-dd
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {Date} element value
 */
function xpathDate(doc, path)
{
	const val = xpathString(doc, path);

	if (!val) {
		return undefined;
	}

	return mdatefns.parseISO(val.substring(0, 10));
}

/**
 * Get element content as date in format yyyy-mm-dd hh:mm:ss
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {Date} element value
 */
function xpathDateTime(doc, path)
{
	const val = xpathString(doc, path);

	if (!val) {
		return undefined;
	}

	return mdatefns.parseISO(val);
}

/**
 * Get element content as VAT person object
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @param {Array} ar VAT persons array
 */
function xpathVATPerson(doc, path, ar)
{
	for (let i = 1; ; i++) {
		const nip = xpathString(doc, path + '/person[' + i + ']/nip/text()');

		if (!nip) {
			break;
		}

		const vp = new VATPerson();

		vp.nip = NIP.normalize(nip);
		vp.companyName = xpathString(doc, path + '/person[' + i + ']/companyName/text()');
		vp.firstName = xpathString(doc, path + '/person[' + i + ']/firstName/text()');
		vp.lastName = xpathString(doc, path + '/person[' + i + ']/lastName/text()');

		ar.push(vp);
	}
}

/**
 * Convert date to yyyy-mm-dd string
 * @param {string|Date} date input date
 * @return {string} output string
 */
function toString(date)
{
	if (typeof date === 'string') {
		// verify & format
		const d = mdatefns.parse(date, 'yyyy-MM-dd', new Date());

		return mdatefns.format(d, 'yyyy-MM-dd');
	}
	else if (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
		// format
		return mdatefns.format(date, 'yyyy-MM-dd');
	}

	return undefined;
}

/**
 * Set non default service URL
 * @param {string} url service URL
 */
NIP24Client.prototype.setURL = function(url) {
	this.url = url;
};

/**
 * Set application info
 * @param {string} app app info
 */
NIP24Client.prototype.setApp = function(app) {
	this.app = app;
};

/**
 * Check frim activity
 * @param {string} nip NIP number
 * @return {Promise<boolean>} promise returning account activity flag on success
 */
NIP24Client.prototype.isActive = function(nip) {
	return this.isActiveExt(Number.NIP, nip);
};

/**
 * Check frim activity
 * @param {number} type search number type as Number::xxx value
 * @param {string} number search number value
 * @return {Promise<boolean>} promise returning account activity flag on success
 */
NIP24Client.prototype.isActiveExt = function(type, number) {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// validate number and construct path
		const suffix = getPathSuffix(this, type, number);

		if (!suffix) {
			reject(new Error(this.err));
			return;
		}

		// send request
		get(this, this.url + '/check/firm/' + suffix).then((doc) => {
			const code = xpathString(doc, '/result/error/code/text()');

			if (code) {
				if (parseInt(code) === 9) {
					// not active
					clear(this);
					resolve(false);

					return;
				}
				else {
					set(this, parseInt(code), xpathString(doc, '/result/error/description/text()'));
					reject(new Error(this.err));

					return;
				}
			}

			// active
			resolve(true);
		}).catch((e) => {
			set(this, Err.CLI_EXCEPTION, e.message);
			reject(e);
		});
	});
};

/**
 * Get invoice data for specified NIP number
 * @param {string} nip NIP number
 * @return {Promise<InvoiceData>} promise returning invoice data on success
 */
NIP24Client.prototype.getInvoiceData = function(nip) {
	return this.getInvoiceDataExt(Number.NIP, nip);
};

/**
 * Get invoice data for specified number type
 * @param {number} type search number type as Number::xxx value
 * @param {string} number search number value
 * @return {Promise<InvoiceData>} promise returning invoice data on success
 */
NIP24Client.prototype.getInvoiceDataExt = function(type, number) {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// validate number and construct path
		const suffix = getPathSuffix(this, type, number);

		if (!suffix) {
			reject(new Error(this.err));
			return;
		}

		// send request
		get(this, this.url + '/get/invoice/' + suffix).then((doc) => {
			const code = xpathString(doc, '/result/error/code/text()');

			if (code) {
				set(this, parseInt(code), xpathString(doc, '/result/error/description/text()'));
				reject(new Error(this.err));

				return;
			}

			const id = new InvoiceData();

			id.uid = xpathString(doc, '/result/firm/uid/text()');
			id.nip = xpathString(doc, '/result/firm/nip/text()');

			id.name = xpathString(doc, '/result/firm/name/text()');
			id.firstName = xpathString(doc, '/result/firm/firstname/text()');
			id.lastName = xpathString(doc, '/result/firm/lastname/text()');

			id.street = xpathString(doc, '/result/firm/street/text()');
			id.streetNumber = xpathString(doc, '/result/firm/streetNumber/text()');
			id.houseNumber = xpathString(doc, '/result/firm/houseNumber/text()');
			id.city = xpathString(doc, '/result/firm/city/text()');
			id.postCode = xpathString(doc, '/result/firm/postCode/text()');
			id.postCity = xpathString(doc, '/result/firm/postCity/text()');

			id.phone = xpathString(doc, '/result/firm/phone/text()');
			id.email = xpathString(doc, '/result/firm/email/text()');
			id.www = xpathString(doc, '/result/firm/www/text()');

			resolve(id);
		}).catch((e) => {
			set(this, Err.CLI_EXCEPTION, e.message);
			reject(e);
		});
	});
};

/**
 * Get all data for specified NIP number
 * @param {string} nip NIP number
 * @return {Promise<AllData>} promise returning firm data on success
 */
NIP24Client.prototype.getAllData = function(nip) {
	return this.getAllDataExt(Number.NIP, nip);
};

/**
 * Get all data for specified number type
 * @param {number} type search number type as Number::xxx value
 * @param {string} number search number value
 * @return {Promise<AllData>} promise returning firm data on success
 */
NIP24Client.prototype.getAllDataExt = function(type, number) {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// validate number and construct path
		const suffix = getPathSuffix(this, type, number);

		if (!suffix) {
			reject(new Error(this.err));
			return;
		}

		// send request
		get(this, this.url + '/get/all/' + suffix).then((doc) => {
			const code = xpathString(doc, '/result/error/code/text()');

			if (code) {
				set(this, parseInt(code), xpathString(doc, '/result/error/description/text()'));
				reject(new Error(this.err));

				return;
			}

			const ad = new AllData();

			ad.uid = xpathString(doc, '/result/firm/uid/text()');
			ad.type = xpathString(doc, '/result/firm/type/text()');
			ad.nip = xpathString(doc, '/result/firm/nip/text()');
			ad.regon = xpathString(doc, '/result/firm/regon/text()');

			ad.name = xpathString(doc, '/result/firm/name/text()');
			ad.shortname = xpathString(doc, '/result/firm/shortname/text()');
			ad.firstname = xpathString(doc, '/result/firm/firstname/text()');
			ad.secondname = xpathString(doc, '/result/firm/secondname/text()');
			ad.lastname = xpathString(doc, '/result/firm/lastname/text()');

			ad.street = xpathString(doc, '/result/firm/street/text()');
			ad.streetCode = xpathString(doc, '/result/firm/streetCode/text()');
			ad.streetNumber = xpathString(doc, '/result/firm/streetNumber/text()');
			ad.houseNumber = xpathString(doc, '/result/firm/houseNumber/text()');
			ad.city = xpathString(doc, '/result/firm/city/text()');
			ad.cityCode = xpathString(doc, '/result/firm/cityCode/text()');
			ad.community = xpathString(doc, '/result/firm/community/text()');
			ad.communityCode = xpathString(doc, '/result/firm/communityCode/text()');
			ad.county = xpathString(doc, '/result/firm/county/text()');
			ad.countyCode = xpathString(doc, '/result/firm/countyCode/text()');
			ad.state = xpathString(doc, '/result/firm/state/text()');
			ad.stateCode = xpathString(doc, '/result/firm/stateCode/text()');
			ad.postCode = xpathString(doc, '/result/firm/postCode/text()');
			ad.postCity = xpathString(doc, '/result/firm/postCity/text()');

			ad.phone = xpathString(doc, '/result/firm/phone/text()');
			ad.email = xpathString(doc, '/result/firm/email/text()');
			ad.www = xpathString(doc, '/result/firm/www/text()');

			ad.creationDate = xpathDateTime(doc, '/result/firm/creationDate/text()');
			ad.startDate = xpathDateTime(doc, '/result/firm/startDate/text()');
			ad.registrationDate = xpathDateTime(doc, '/result/firm/registrationDate/text()');
			ad.holdDate = xpathDateTime(doc, '/result/firm/holdDate/text()');
			ad.renevalDate = xpathDateTime(doc, '/result/firm/renevalDate/text()');
			ad.lastUpdateDate = xpathDateTime(doc, '/result/firm/lastUpdateDate/text()');
			ad.endDate = xpathDateTime(doc, '/result/firm/endDate/text()');

			ad.registryEntityCode = xpathString(doc, '/result/firm/registryEntity/code/text()');
			ad.registryEntityName = xpathString(doc, '/result/firm/registryEntity/name/text()');

			ad.registryCode = xpathString(doc, '/result/firm/registry/code/text()');
			ad.registryName = xpathString(doc, '/result/firm/registry/name/text()');

			ad.recordCreationDate = xpathDateTime(doc, '/result/firm/record/created/text()');
			ad.recordNumber = xpathString(doc, '/result/firm/record/number/text()');

			ad.basicLegalFormCode = xpathString(doc, '/result/firm/basicLegalForm/code/text()');
			ad.basicLegalFormName = xpathString(doc, '/result/firm/basicLegalForm/name/text()');

			ad.specificLegalFormCode = xpathString(doc, '/result/firm/specificLegalForm/code/text()');
			ad.specificLegalFormName = xpathString(doc, '/result/firm/specificLegalForm/name/text()');

			ad.ownershipFormCode = xpathString(doc, '/result/firm/ownershipForm/code/text()');
			ad.ownershipFormName = xpathString(doc, '/result/firm/ownershipForm/name/text()');

			for (let i = 1; ; i++) {
				const c = xpathString(doc, '/result/firm/businessPartners/businessPartner[' + i + ']/regon/text()');

				if (!c) {
					break;
				}

				const firm = xpathString(doc, '/result/firm/businessPartners/businessPartner[' + i + ']/firmName/text()');
				const first = xpathString(doc, '/result/firm/businessPartners/businessPartner[' + i + ']/firstName/text()');
				const second = xpathString(doc, '/result/firm/businessPartners/businessPartner[' + i + ']/secondName/text()');
				const last = xpathString(doc, '/result/firm/businessPartners/businessPartner[' + i + ']/lastName/text()');

				const bp = new BusinessPartner();

				bp.regon = c;
				bp.firmName = firm;
				bp.firstName = first;
				bp.secondName = second;
				bp.lastName = last;

				ad.businessPartner.push(bp);
			}

			for (let i = 1; ; i++) {
				const c = xpathString(doc, '/result/firm/PKDs/PKD[' + i + ']/code/text()');

				if (!c) {
					break;
				}

				const descr = xpathString(doc, '/result/firm/PKDs/PKD[' + i + ']/description/text()');
				const pri = xpathString(doc, '/result/firm/PKDs/PKD[' + i + ']/primary/text()');

				const pkd = new PKD();

				pkd.code = c;
				pkd.description = descr;
				pkd.primary = (pri === 'true');

				ad.pkd.push(pkd);
			}

			resolve(ad);
		}).catch((e) => {
			set(this, Err.CLI_EXCEPTION, e.message);
			reject(e);
		});
	});
};

/**
 * Get VIES data for specified number
 * @param {string} euvat EU VAT number with 2-letter country prefix
 * @return {Promise<VIESData>} promise returning VIES data on success
 */
NIP24Client.prototype.getVIESData = function(euvat) {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// validate number and construct path
		const suffix = getPathSuffix(this, Number.EUVAT, euvat);

		if (!suffix) {
			reject(new Error(this.err));
			return;
		}

		// send request
		get(this, this.url + '/get/vies/' + suffix).then((doc) => {
			const code = xpathString(doc, '/result/error/code/text()');

			if (code) {
				set(this, parseInt(code), xpathString(doc, '/result/error/description/text()'));
				reject(new Error(this.err));

				return;
			}

			const vd = new VIESData();

			vd.uid = xpathString(doc, '/result/vies/uid/text()');
			vd.countryCode = xpathString(doc, '/result/vies/countryCode/text()');
			vd.vatNumber = xpathString(doc, '/result/vies/vatNumber/text()');

			vd.valid = (xpathString(doc, '/result/vies/valid/text()') === 'true');

			vd.traderName = xpathString(doc, '/result/vies/traderName/text()');
			vd.traderCompanyType = xpathString(doc, '/result/vies/traderCompanyType/text()');
			vd.traderAddress = xpathString(doc, '/result/vies/traderAddress/text()');

			vd.id = xpathString(doc, '/result/vies/id/text()');
			vd.date = xpathDate(doc, '/result/vies/date/text()');
			vd.source = xpathString(doc, '/result/vies/source/text()');

			resolve(vd);
		}).catch((e) => {
			set(this, Err.CLI_EXCEPTION, e.message);
			reject(e);
		});
	});
};


/**
 * Check if firm is an active VAT payer
 * @param {string} nip NIP number
 * @return {Promise<VATStatus>} promise returning VAT status on success
 */
NIP24Client.prototype.getVATStatus = function(nip) {
	return this.getVATStatusExt(Number.NIP, nip);
};

/**
 * Check if firm is an active VAT payer
 * @param {number} type search number type as Number::xxx value
 * @param {string} number search number value
 * @return {Promise<VATStatus>} promise returning VAT status on success
 */
NIP24Client.prototype.getVATStatusExt = function(type, number) {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// validate number and construct path
		const suffix = getPathSuffix(this, type, number);

		if (!suffix) {
			reject(new Error(this.err));
			return;
		}

		// send request
		get(this, this.url + '/check/vat/direct/' + suffix).then((doc) => {
			const code = xpathString(doc, '/result/error/code/text()');

			if (code) {
				set(this, parseInt(code), xpathString(doc, '/result/error/description/text()'));
				reject(new Error(this.err));

				return;
			}

			const vs = new VATStatus.VATStatus();

			vs.uid = xpathString(doc, '/result/vat/uid/text()');
			vs.nip = xpathString(doc, '/result/vat/nip/text()');
			vs.regon = xpathString(doc, '/result/vat/regon/text()');
			vs.name = xpathString(doc, '/result/vat/name/text()');

			vs.status = xpathInt(doc, '/result/vat/status/text()');
			vs.result = xpathString(doc, '/result/vat/result/text()');

			vs.id = xpathString(doc, '/result/vat/id/text()');
			vs.date = xpathDate(doc, '/result/vat/date/text()');
			vs.source = xpathString(doc, '/result/vat/source/text()');

			resolve(vs);
		}).catch((e) => {
			set(this, Err.CLI_EXCEPTION, e.message);
			reject(e);
		});
	});
};

/**
 * Check if firm owns bank account number
 * @param {string} nip NIP number
 * @param {string} iban bank account IBAN (for polish numbers PL prefix may be omitted)
 * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
 * @return {Promise<IBANStatus>} promise returning VAT status on success
 */
NIP24Client.prototype.getIBANStatus = function(nip, iban, date = undefined) {
	return this.getIBANStatusExt(Number.NIP, nip, iban, date);
};

/**
 * Check if firm owns bank account number
 * @param {number} type search number type as Number::xxx value
 * @param {string} number search number value
 * @param {string} iban bank account IBAN (for polish numbers PL prefix may be omitted)
 * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
 * @return {Promise<IBANStatus>} promise returning VAT status on success
 */
NIP24Client.prototype.getIBANStatusExt = function(type, number, iban, date = undefined) {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// validate number and construct path
		const suffix = getPathSuffix(this, type, number);

		if (!suffix) {
			reject(new Error(this.err));
			return;
		}

		if (!IBAN.isValid(iban)) {
			iban = ('PL' + iban);

			if (!IBAN.isValid(iban)) {
				set(this, Err.CLI_IBAN);
				reject(new Error(this.err));

				return;
			}
		}

		if (!date) {
			date = toString(new Date());
		}

		// send request
		get(this, this.url + '/check/iban/' + suffix + '/' + IBAN.normalize(iban) + '/' + toString(date)).then((doc) => {
			const code = xpathString(doc, '/result/error/code/text()');

			if (code) {
				set(this, parseInt(code), xpathString(doc, '/result/error/description/text()'));
				reject(new Error(this.err));

				return;
			}

			const is = new IBANStatus();

			is.uid = xpathString(doc, '/result/iban/uid/text()');
			is.nip = xpathString(doc, '/result/iban/nip/text()');
			is.regon = xpathString(doc, '/result/iban/regon/text()');
			is.iban = xpathString(doc, '/result/iban/iban/text()');

			is.valid = (xpathString(doc, '/result/iban/valid/text()') === 'true');

			is.id = xpathString(doc, '/result/iban/id/text()');
			is.date = xpathDate(doc, '/result/iban/date/text()');
			is.source = xpathString(doc, '/result/iban/source/text()');

			resolve(is);
		}).catch((e) => {
			set(this, Err.CLI_EXCEPTION, e.message);
			reject(e);
		});
	});
};

/**
 * Check bank account status and VAT status using whitelist file
 * @param {string} nip NIP number
 * @param {string} iban bank account IBAN (for polish numbers PL prefix may be omitted)
 * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
 * @return {Promise<WLStatus>} promise returning VAT status on success
 */
NIP24Client.prototype.getWhitelistStatus = function(nip, iban, date = undefined) {
	return this.getWhitelistStatusExt(Number.NIP, nip, iban, date);
};

/**
 * Check bank account status and VAT status using whitelist file
 * @param {number} type search number type as Number::xxx value
 * @param {string} number search number value
 * @param {string} iban bank account IBAN (for polish numbers PL prefix may be omitted)
 * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
 * @return {Promise<WLStatus>} promise returning VAT status on success
 */
NIP24Client.prototype.getWhitelistStatusExt = function(type, number, iban, date = undefined) {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// validate number and construct path
		const suffix = getPathSuffix(this, type, number);

		if (!suffix) {
			reject(new Error(this.err));
			return;
		}

		if (!IBAN.isValid(iban)) {
			iban = ('PL' + iban);

			if (!IBAN.isValid(iban)) {
				set(this, Err.CLI_IBAN);
				reject(new Error(this.err));

				return;
			}
		}

		if (!date) {
			date = toString(new Date());
		}

		// send request
		get(this, this.url + '/check/whitelist/' + suffix + '/' + IBAN.normalize(iban) + '/' + toString(date)).then((doc) => {
			const code = xpathString(doc, '/result/error/code/text()');

			if (code) {
				set(this, parseInt(code), xpathString(doc, '/result/error/description/text()'));
				reject(new Error(this.err));

				return;
			}

			const wl = new WLStatus.WLStatus();

			wl.uid = xpathString(doc, '/result/whitelist/uid/text()');

			wl.nip = xpathString(doc, '/result/whitelist/nip/text()');
			wl.iban = xpathString(doc, '/result/whitelist/iban/text()');

			wl.valid = (xpathString(doc, '/result/whitelist/valid/text()') === 'true');
			wl.virtual = (xpathString(doc, '/result/whitelist/virtual/text()') === 'true');

			wl.vatStatus = xpathInt(doc, '/result/whitelist/vatStatus/text()');
			wl.vatResult = xpathString(doc, '/result/whitelist/vatResult/text()');

			wl.hashIndex = xpathInt(doc, '/result/whitelist/hashIndex/text()');
			wl.maskIndex = xpathInt(doc, '/result/whitelist/maskIndex/text()');
			wl.date = xpathDate(doc, '/result/whitelist/date/text()');
			wl.source = xpathString(doc, '/result/whitelist/source/text()');

			resolve(wl);
		}).catch((e) => {
			set(this, Err.CLI_EXCEPTION, e.message);
			reject(e);
		});
	});
};

/**
 * Search data in VAT registry
 * @param {string} nip NIP number
 * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
 * @return {Promise<SearchResult>} promise returning search result on success
 */
NIP24Client.prototype.searchVATRegistry = function(nip, date = undefined) {
	return this.searchVATRegistryExt(Number.NIP, nip, date);
};

/**
 * Search data in VAT registry
 * @param {number} type search number type as Number::xxx value
 * @param {string} number search number value
 * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
 * @return {Promise<SearchResult>} promise returning search result on success
 */
NIP24Client.prototype.searchVATRegistryExt = function(type, number, date = undefined) {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// validate number and construct path
		const suffix = getPathSuffix(this, type, number);

		if (!suffix) {
			reject(new Error(this.err));
			return;
		}

		if (!date) {
			date = toString(new Date());
		}

		// send request
		get(this, this.url + '/search/vat/' + suffix + '/' + toString(date)).then((doc) => {
			const code = xpathString(doc, '/result/error/code/text()');

			if (code) {
				set(this, parseInt(code), xpathString(doc, '/result/error/description/text()'));
				reject(new Error(this.err));

				return;
			}

			const sr = new SearchResult();

			sr.uid = xpathString(doc, '/result/search/uid/text()');

			for (let i = 1; ; i++) {
				const nip = xpathString(doc, '/result/search/entities/entity[' + i + ']/nip/text()');

				if (!nip) {
					break;
				}

				const ve = new VATEntity.VATEntity();

				ve.name = xpathString(doc, '/result/search/entities/entity[' + i + ']/name/text()');
				ve.nip = nip;
				ve.regon = xpathString(doc, '/result/search/entities/entity[' + i + ']/regon/text()');
				ve.krs = xpathString(doc, '/result/search/entities/entity[' + i + ']/krs/text()');
				ve.residenceAddress = xpathString(doc, '/result/search/entities/entity[' + i + ']/residenceAddress/text()');
				ve.workingAddress = xpathString(doc, '/result/search/entities/entity[' + i + ']/workingAddress/text()');
				ve.vatStatus = xpathInt(doc, '/result/search/entities/entity[' + i + ']/vat/status/text()');
				ve.vatResult = xpathString(doc, '/result/search/entities/entity[' + i + ']/vat/result/text()');

				xpathVATPerson(doc, '/result/search/entities/entity[' + i + ']/representatives', ve.representatives);
				xpathVATPerson(doc, '/result/search/entities/entity[' + i + ']/authorizedClerks', ve.authorizedClerks);
				xpathVATPerson(doc, '/result/search/entities/entity[' + i + ']/partners', ve.partners);

				for (let k = 1; ; k++) {
					const iban = xpathString(doc, '/result/search/entities/entity[' + i + ']/ibans/iban[' + k + ']/text()');

					if (!iban) {
						break;
					}

					ve.ibans.push(iban);
				}

				ve.hasVirtualAccounts = (xpathString(doc, '/result/search/entities/entity[' + i + ']/hasVirtualAccounts/text()') === 'true');
				ve.registrationLegalDate = xpathDate(doc, '/result/search/entities/entity[' + i + ']/registrationLegalDate/text()');
				ve.registrationDenialDate = xpathDate(doc, '/result/search/entities/entity[' + i + ']/registrationDenialDate/text()');
				ve.registrationDenialBasis = xpathString(doc, '/result/search/entities/entity[' + i + ']/registrationDenialBasis/text()');
				ve.restorationDate = xpathDate(doc, '/result/search/entities/entity[' + i + ']/restorationDate/text()');
				ve.restorationBasis = xpathString(doc, '/result/search/entities/entity[' + i + ']/restorationBasis/text()');
				ve.removalDate = xpathDate(doc, '/result/search/entities/entity[' + i + ']/removalDate/text()');
				ve.removalBasis = xpathString(doc, '/result/search/entities/entity[' + i + ']/removalBasis/text()');

				sr.results.push(ve);
			}

			sr.id = xpathString(doc, '/result/search/id/text()');
			sr.date = xpathDate(doc, '/result/search/date/text()');
			sr.source = xpathString(doc, '/result/search/source/text()');

			resolve(sr);
		}).catch((e) => {
			set(this, Err.CLI_EXCEPTION, e.message);
			reject(e);
		});
	});
};

/**
 * Get current account status
 * @return {Promise<AccountStatus>} promise returning account status on success
 */
NIP24Client.prototype.getAccountStatus = function() {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// send request
		get(this, this.url + '/check/account/status').then((doc) => {
			const code = xpathString(doc, '/result/error/code/text()');

			if (code) {
				set(this, parseInt(code), xpathString(doc, '/result/error/description/text()'));
				reject(new Error(this.err));

				return;
			}

			const as = new AccountStatus();

			as.uid = xpathString(doc, '/result/account/uid/text()');
			as.type = xpathString(doc, '/result/account/type/text()');
			as.validTo = xpathDateTime(doc, '/result/account/validTo/text()');
			as.billingPlanName = xpathString(doc, '/result/account/billingPlan/name/text()');

			as.subscriptionPrice = xpathFloat(doc, '/result/account/billingPlan/subscriptionPrice/text()');
			as.itemPrice = xpathFloat(doc, '/result/account/billingPlan/itemPrice/text()');
			as.itemPriceStatus = xpathFloat(doc, '/result/account/billingPlan/itemPriceCheckStatus/text()');
			as.itemPriceInvoice = xpathFloat(doc, '/result/account/billingPlan/itemPriceInvoiceData/text()');
			as.itemPriceAll = xpathFloat(doc, '/result/account/billingPlan/itemPriceAllData/text()');
			as.itemPriceIBAN = xpathFloat(doc, '/result/account/billingPlan/itemPriceIBANStatus/text()');
			as.itemPriceWhitelist = xpathFloat(doc, '/result/account/billingPlan/itemPriceWLStatus/text()');
			as.itemPriceSearchVAT = xpathFloat(doc, '/result/account/billingPlan/itemPriceSearchVAT/text()');

			as.limit = xpathInt(doc, '/result/account/billingPlan/limit/text()');
			as.requestDelay = xpathInt(doc, '/result/account/billingPlan/requestDelay/text()');
			as.domainLimit = xpathInt(doc, '/result/account/billingPlan/domainLimit/text()');

			as.overPlanAllowed = (xpathString(doc, '/result/account/billingPlan/overplanAllowed/text()') === 'true');
			as.terytCodes = (xpathString(doc, '/result/account/billingPlan/terytCodes/text()') === 'true');
			as.excelAddIn = (xpathString(doc, '/result/account/billingPlan/excelAddin/text()') === 'true');
			as.jpkVat = (xpathString(doc, '/result/account/billingPlan/jpkVat/text()') === 'true');
			as.cli = (xpathString(doc, '/result/account/billingPlan/cli/text()') === 'true');
			as.stats = (xpathString(doc, '/result/account/billingPlan/stats/text()') === 'true');
			as.nipMonitor = (xpathString(doc, '/result/account/billingPlan/nipMonitor/text()') === 'true');

			as.searchByNIP = (xpathString(doc, '/result/account/billingPlan/searchByNip/text()') === 'true');
			as.searchByREGON = (xpathString(doc, '/result/account/billingPlan/searchByRegon/text()') === 'true');
			as.searchByKRS = (xpathString(doc, '/result/account/billingPlan/searchByKrs/text()') === 'true');

			as.funcIsActive = (xpathString(doc, '/result/account/billingPlan/funcIsActive/text()') === 'true');
			as.funcGetInvoiceData = (xpathString(doc, '/result/account/billingPlan/funcGetInvoiceData/text()') === 'true');
			as.funcGetAllData = (xpathString(doc, '/result/account/billingPlan/funcGetAllData/text()') === 'true');
			as.funcGetVIESData = (xpathString(doc, '/result/account/billingPlan/funcGetVIESData/text()') === 'true');
			as.funcGetVATStatus = (xpathString(doc, '/result/account/billingPlan/funcGetVATStatus/text()') === 'true');
			as.funcGetIBANStatus = (xpathString(doc, '/result/account/billingPlan/funcGetIBANStatus/text()') === 'true');
			as.funcGetWhitelistStatus = (xpathString(doc, '/result/account/billingPlan/funcGetWLStatus/text()') === 'true');
			as.funcSearchVAT = (xpathString(doc, '/result/account/billingPlan/funcSearchVAT/text()') === 'true');

			as.invoiceDataCount = xpathInt(doc, '/result/account/requests/invoiceData/text()');
			as.allDataCount = xpathInt(doc, '/result/account/requests/allData/text()');
			as.firmStatusCount = xpathInt(doc, '/result/account/requests/firmStatus/text()');
			as.vatStatusCount = xpathInt(doc, '/result/account/requests/vatStatus/text()');
			as.viesStatusCount = xpathInt(doc, '/result/account/requests/viesStatus/text()');
			as.ibanStatusCount = xpathInt(doc, '/result/account/requests/ibanStatus/text()');
			as.whitelistStatusCount = xpathInt(doc, '/result/account/requests/wlStatus/text()');
			as.searchVATCount = xpathInt(doc, '/result/account/requests/searchVAT/text()');
			as.totalCount = xpathInt(doc, '/result/account/requests/total/text()');

			resolve(as);
		}).catch((e) => {
			set(this, Err.CLI_EXCEPTION, e.message);
			reject(e);
		});
	});
};

/**
 * Get last error code
 * @returns {int} error code
 */
NIP24Client.prototype.getLastErrorCode = function () {
    return this.errcode;
};

/**
 * Get last error message
 * @returns {string} error message
 */
NIP24Client.prototype.getLastError = function () {
	return this.err;
};

module.exports = NIP24Client;
