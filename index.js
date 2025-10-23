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

const Err = require('./lib/error');
const Number = require('./lib/number');
const EUVAT = require('./lib/euvat');
const IBAN = require('./lib/iban');
const KRS = require('./lib/krs');
const NIP = require('./lib/nip');
const REGON = require('./lib/regon');
const AccountStatus = require('./lib/accountstatus');
const AllData = require('./lib/alldata');
const BusinessPartner = require('./lib/businesspartner');
const IBANStatus = require('./lib/ibanstatus');
const InvoiceData = require('./lib/invoicedata');
const NIP24Client = require('./lib/nip24client');
const PKD = require('./lib/pkd');
const SearchResult = require('./lib/searchresult');
const VATEntity = require('./lib/vatentity');
const VATPerson = require('./lib/vatperson');
const VATStatus = require('./lib/vatstatus');
const VIESData = require('./lib/viesdata');
const WLStatus = require('./lib/wlstatus');

module.exports = {
    Err,
    Number,
    EUVAT,
    IBAN,
    KRS,
    NIP,
    REGON,
	AccountStatus,
	AllData,
	BusinessPartner,
	IBANStatus,
	InvoiceData,
	NIP24Client,
	PKD,
	SearchResult,
	VATEntity,
	VATPerson,
	VATStatus,
	VIESData,
	WLStatus
};
