export = NIP24Client;
/**
 * Construct new service client object
 * @param {string} id NIP24 key identifier
 * @param {string} key NIP24 key
 * @constructor
 */
declare function NIP24Client(id?: string, key?: string): void;
declare class NIP24Client {
    /**
     * Construct new service client object
     * @param {string} id NIP24 key identifier
     * @param {string} key NIP24 key
     * @constructor
     */
    constructor(id?: string, key?: string);
    url: string;
    id: string;
    key: string;
    app: string;
    errcode: number;
    err: string;
    VERSION: string;
    PRODUCTION_URL: string;
    TEST_URL: string;
    TEST_ID: string;
    TEST_KEY: string;
    /**
     * Set non default service URL
     * @param {string} url service URL
     */
    setURL(url: string): void;
    /**
     * Set application info
     * @param {string} app app info
     */
    setApp(app: string): void;
    /**
     * Check frim activity
     * @param {string} nip NIP number
     * @return {Promise<boolean>} promise returning account activity flag on success
     */
    isActive(nip: string): Promise<boolean>;
    /**
     * Check frim activity
     * @param {number} type search number type as Number::xxx value
     * @param {string} number search number value
     * @return {Promise<boolean>} promise returning account activity flag on success
     */
    isActiveExt(type: number, number: string): Promise<boolean>;
    /**
     * Get invoice data for specified NIP number
     * @param {string} nip NIP number
     * @return {Promise<InvoiceData>} promise returning invoice data on success
     */
    getInvoiceData(nip: string): Promise<InvoiceData>;
    /**
     * Get invoice data for specified number type
     * @param {number} type search number type as Number::xxx value
     * @param {string} number search number value
     * @return {Promise<InvoiceData>} promise returning invoice data on success
     */
    getInvoiceDataExt(type: number, number: string): Promise<InvoiceData>;
    /**
     * Get all data for specified NIP number
     * @param {string} nip NIP number
     * @return {Promise<AllData>} promise returning firm data on success
     */
    getAllData(nip: string): Promise<AllData>;
    /**
     * Get all data for specified number type
     * @param {number} type search number type as Number::xxx value
     * @param {string} number search number value
     * @return {Promise<AllData>} promise returning firm data on success
     */
    getAllDataExt(type: number, number: string): Promise<AllData>;
    /**
     * Get VIES data for specified number
     * @param {string} euvat EU VAT number with 2-letter country prefix
     * @return {Promise<VIESData>} promise returning VIES data on success
     */
    getVIESData(euvat: string): Promise<VIESData>;
    /**
     * Check if firm is an active VAT payer
     * @param {string} nip NIP number
     * @return {Promise<VATStatus>} promise returning VAT status on success
     */
    getVATStatus(nip: string): Promise<VATStatus>;
    /**
     * Check if firm is an active VAT payer
     * @param {number} type search number type as Number::xxx value
     * @param {string} number search number value
     * @return {Promise<VATStatus>} promise returning VAT status on success
     */
    getVATStatusExt(type: number, number: string): Promise<VATStatus>;
    /**
     * Check if firm owns bank account number
     * @param {string} nip NIP number
     * @param {string} iban bank account IBAN (for polish numbers PL prefix may be omitted)
     * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
     * @return {Promise<IBANStatus>} promise returning VAT status on success
     */
    getIBANStatus(nip: string, iban: string, date?: string): Promise<IBANStatus>;
    /**
     * Check if firm owns bank account number
     * @param {number} type search number type as Number::xxx value
     * @param {string} number search number value
     * @param {string} iban bank account IBAN (for polish numbers PL prefix may be omitted)
     * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
     * @return {Promise<IBANStatus>} promise returning VAT status on success
     */
    getIBANStatusExt(type: number, number: string, iban: string, date?: string): Promise<IBANStatus>;
    /**
     * Check bank account status and VAT status using whitelist file
     * @param {string} nip NIP number
     * @param {string} iban bank account IBAN (for polish numbers PL prefix may be omitted)
     * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
     * @return {Promise<WLStatus>} promise returning VAT status on success
     */
    getWhitelistStatus(nip: string, iban: string, date?: string): Promise<WLStatus>;
    /**
     * Check bank account status and VAT status using whitelist file
     * @param {number} type search number type as Number::xxx value
     * @param {string} number search number value
     * @param {string} iban bank account IBAN (for polish numbers PL prefix may be omitted)
     * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
     * @return {Promise<WLStatus>} promise returning VAT status on success
     */
    getWhitelistStatusExt(type: number, number: string, iban: string, date?: string): Promise<WLStatus>;
    /**
     * Search data in VAT registry
     * @param {string} nip NIP number
     * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
     * @return {Promise<SearchResult>} promise returning search result on success
     */
    searchVATRegistry(nip: string, date?: string): Promise<SearchResult>;
    /**
     * Search data in VAT registry
     * @param {number} type search number type as Number::xxx value
     * @param {string} number search number value
     * @param {string} date date in format 'yyyy-mm-dd' (skip for current day)
     * @return {Promise<SearchResult>} promise returning search result on success
     */
    searchVATRegistryExt(type: number, number: string, date?: string): Promise<SearchResult>;
    /**
     * Get current account status
     * @return {Promise<AccountStatus>} promise returning account status on success
     */
    getAccountStatus(): Promise<AccountStatus>;
    /**
     * Get last error code
     * @returns {number} error code
     */
    getLastErrorCode(): number;
    /**
     * Get last error message
     * @returns {string} error message
     */
    getLastError(): string;
}
import InvoiceData = require("./invoicedata");
import AllData = require("./alldata");
import VIESData = require("./viesdata");
import VATStatus = require("./vatstatus");
import IBANStatus = require("./ibanstatus");
import WLStatus = require("./wlstatus");
import SearchResult = require("./searchresult");
import AccountStatus = require("./accountstatus");
