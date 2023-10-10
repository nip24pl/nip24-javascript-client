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

const NIP24 = require('nip24client');

// Utworzenie obiektu klienta usługi serwisu produkcyjnego
// id – ciąg znaków reprezentujący identyfikator klucza API
// key – ciąg znaków reprezentujący klucz API
// const nip24 = new NIP24.NIP24Client('id', 'key');

// Utworzenie obiektu klienta usługi serwisu testowego
const nip24 = new NIP24.NIP24Client();

const nip = '7171642051';
const nip_eu = 'PL' + nip;
const account_number = '49154000046458439719826658';

async function fetchData() {
    return {
        // Sprawdzenie stanu konta
        accountStatus:   await nip24.getAccountStatus(),
        // Sprawdzenie statusu fimy
        isActive:        await nip24.isActiveExt(NIP24.Number.NIP, nip),
        // Sprawdzenie statusu firmy w rejestrze VAT
        vatStatus:       await nip24.getVATStatusExt(NIP24.Number.NIP, nip),
        // Wywołanie metody zwracającej dane do faktury
        invoiceData:     await nip24.getInvoiceDataExt(NIP24.Number.NIP, nip),
        // Wywołanie metody zwracającej szczegółowe dane firmy
        allData:         await nip24.getAllDataExt(NIP24.Number.NIP, nip),
        // Wywołanie metody zwracającej dane z systemu VIES
        viesData:        await nip24.getVIESData(nip_eu),
        // Wywołanie metody zwracającej informacje o rachunku bankowym
        ibanStatus:      await nip24.getIBANStatusExt(NIP24.Number.NIP, nip, account_number),
        // Wywołanie metody sprawdzającej status podmiotu na białej liście podatników VAT
        whitelistStatus: await nip24.getWhitelistStatusExt(NIP24.Number.NIP, nip, account_number),
        // Wywołanie metody wyszukującej dane w rejestrze VAT
        searchVatReg:    await nip24.searchVATRegistryExt(NIP24.Number.NIP, nip)
    };
}

const app = document.querySelector('#app');

fetchData().then(data => {
    app.innerHTML = `
        <table>
            <tr>
                <th>Funkcja</th>
                <th>Wynik</th>
            </tr>
            ${createRow('getAccountStatus()', data.accountStatus)}
            ${createRow('isActive()', data.isActive)}
            ${createRow('getVATStatus()', data.vatStatus)}
            ${createRow('getInvoiceData()', data.invoiceData)}
            ${createRow('getAllData()', data.allData)}
            ${createRow('getVIESData()', data.viesData)}
            ${createRow('getIBANStatus()', data.ibanStatus)}
            ${createRow('getWhitelistStatus()', data.whitelistStatus)}
            ${createRow('searchVATRegistry()', data.searchVatReg)}
        </table>
    `;
}).catch(error => {
    app.innerHTML = error;
});

function createRow(key, value) {
    return `
        <tr>
            <td><pre>${key}</pre></td>
            <td><pre>${value}</pre></td>
        </tr>
    `;
}
