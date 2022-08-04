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


module.exports = {
	AccountStatus: require('./lib/accountstatus'),
	AllData: require('./lib/alldata'),
	Err: require('./lib/error'),
	EUVAT: require('./lib/euvat'),
	IBAN: require('./lib/iban'),
	IBANStatus: require('./lib/ibanstatus'),
	InvoiceData: require('./lib/invoicedata'),
	KRS: require('./lib/krs'),
	NIP: require('./lib/nip'),
	NIP24Client: require('./lib/nip24client'),
	Number: require('./lib/number'),
	PKD: require('./lib/pkd'),
	REGON: require('./lib/regon'),
	SearchResult: require('./lib/searchresult'),
	VATEntity: require('./lib/vatentity'),
	VATPerson: require('./lib/vatperson'),
	VATStatus: require('./lib/vatstatus'),
	VIESData: require('./lib/viesdata'),
	WLStatus: require('./lib/wlstatus')
};
