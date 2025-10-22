export = SearchResult;
/**
 * Search result
 */
declare function SearchResult(): void;
declare class SearchResult {
    /**
     * @type {string}
     */
    uid: string;
    /**
     * @type {VATEntity[]}
     */
    results: VATEntity[];
    /**
     * @type {string}
     */
    id: string;
    /**
     * @type {Date}
     */
    date: Date;
    /**
     * @type {string}
     */
    source: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
import VATEntity = require("./vatentity");
