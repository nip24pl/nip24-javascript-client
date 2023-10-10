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

const NIP24 = require('nip24client');

// Utworzenie obiektu klienta usługi serwisu produkcyjnego
// id – ciąg znaków reprezentujący identyfikator klucza API
// key – ciąg znaków reprezentujący klucz API
// var nip24 = new NIP24.NIP24Client('id', 'key');

// Utworzenie obiektu klienta usługi serwisu testowego
const nip24 = new NIP24.NIP24Client();

const nip = '7171642051';
const nip_eu = 'PL' + nip;
const account_number = '49154000046458439719826658';

// Sprawdzenie stanu konta
nip24.getAccountStatus().then((account) => {
	console.log(account.toString());
}).catch((e) => {
	console.log(e.message);
});

// Sprawdzenie statusu fimy
nip24.isActiveExt(NIP24.Number.NIP, nip).then((active) => {
	console.log(active ? 'Firma prowadzi aktywną działalność' : 'Firma zawiesiła lub zakończyła działalność');
}).catch((e) => {
	console.log(e.message);
});

// Sprawdzenie statusu firmy w rejestrze VAT
nip24.getVATStatusExt(NIP24.Number.NIP, nip).then((vat) => {
	console.log(vat.toString());
}).catch((e) => {
	console.log(e.message);
});

// Wywołanie metody zwracającej dane do faktury
nip24.getInvoiceDataExt(NIP24.Number.NIP, nip).then((invoice) => {
	console.log(invoice.toString());
}).catch((e) => {
	console.log(e.message);
});

// Wywołanie metody zwracającej szczegółowe dane firmy
nip24.getAllDataExt(NIP24.Number.NIP, nip).then((all) => {
	console.log(all.toString());
}).catch((e) => {
	console.log(e.message);
});

// Wywołanie metody zwracającej dane z systemu VIES
nip24.getVIESData(nip_eu).then((vies) => {
	console.log(vies.toString());
}).catch((e) => {
	console.log(e.message);
});

// Wywołanie metody zwracającej informacje o rachunku bankowym
nip24.getIBANStatusExt(NIP24.Number.NIP, nip, account_number).then((iban) => {
	console.log(iban.toString());
}).catch((e) => {
	console.log(e.message);
});

// Wywołanie metody sprawdzającej status podmiotu na białej liście podatników VAT
nip24.getWhitelistStatusExt(NIP24.Number.NIP, nip, account_number).then((whitelist) => {
	console.log(whitelist.toString());
}).catch((e) => {
	console.log(e.message);
});

// Wywołanie metody wyszukującej dane w rejestrze VAT
nip24.searchVATRegistryExt(NIP24.Number.NIP, nip).then((result) => {
	console.log(result.toString());
}).catch((e) => {
	console.log(e.message);
});
