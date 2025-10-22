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

const VATEntity = require('./vatentity');

/**
 * Search result
 */
function SearchResult()
{
    /**
     * @type {string}
     */
	this.uid = undefined;

    /**
     * @type {VATEntity[]}
     */
	this.results = [];

    /**
     * @type {string}
     */
	this.id = undefined;

    /**
     * @type {Date}
     */
	this.date = undefined;

    /**
     * @type {string}
     */
	this.source = undefined;
}

/**
 * String representation
 * @return {string} object info
 */
SearchResult.prototype.toString = function() {
	return 'SearchResult: [uid = ' + this.uid
		+ ', results = [' + this.results + ']'
		+ ', id = ' + this.id
		+ ', date = ' + this.date
		+ ', source = ' + this.source
		+ ']';
};

module.exports = SearchResult;
