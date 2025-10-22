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
 * Business partner
 */
function BusinessPartner()
{
    /**
     * @type {string}
     */
    this.regon = undefined;

    /**
     * @type {string}
     */
    this.firmName = undefined;

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
}

/**
 * String representation
 * @return {string} object info
 */
BusinessPartner.prototype.toString = function() {
    return 'BusinessPartner: [regon = ' + this.regon
        + ', firmName = ' + this.firmName
        + ', firstName = ' + this.firstName
        + ', secondName = ' + this.secondName
        + ', lastName = ' + this.lastName
        + ']';
};

module.exports = BusinessPartner;
