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
 * VIES data
 */
function VIESData()
{
	this.uid = undefined;

	this.countryCode = undefined;
	this.vatNumber = undefined;

	this.valid = undefined;

	this.traderName = undefined;
	this.traderCompanyType = undefined;
	this.traderAddress = undefined;

	this.id = undefined;
	this.date = undefined;
	this.source = undefined;
}

/**
 * String representation
 * @return {string} object info
 */
VIESData.prototype.toString = function() {
	return 'VIESData: [uid = ' + this.uid
		+ ', countryCode = ' + this.countryCode
		+ ', vatNumber = ' + this.vatNumber
		+ ', valid = ' + this.valid
		+ ', traderName = ' + this.traderName
		+ ', traderCompanyType = ' + this.traderCompanyType
		+ ', traderAddress = ' + this.traderAddress
		+ ', id = ' + this.id
		+ ', date = ' + this.date
		+ ', source = ' + this.source
		+ ']';
};

module.exports = VIESData;
