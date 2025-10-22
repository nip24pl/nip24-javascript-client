export = AccountStatus;
/**
 * Current account status information
 */
declare function AccountStatus(): void;
declare class AccountStatus {
    /**
     * @type {string}
     */
    uid: string;
    /**
     * @type {string}
     */
    type: string;
    /**
     * @type {Date}
     */
    validTo: Date;
    /**
     * @type {string}
     */
    billingPlanName: string;
    /**
     * @type {number}
     */
    subscriptionPrice: number;
    /**
     * @type {number}
     */
    itemPrice: number;
    /**
     * @type {number}
     */
    itemPriceStatus: number;
    /**
     * @type {number}
     */
    itemPriceInvoice: number;
    /**
     * @type {number}
     */
    itemPriceAll: number;
    /**
     * @type {number}
     */
    itemPriceIBAN: number;
    /**
     * @type {number}
     */
    itemPriceWhitelist: number;
    /**
     * @type {number}
     */
    itemPriceSearchVAT: number;
    /**
     * @type {number}
     */
    limit: number;
    /**
     * @type {number}
     */
    requestDelay: number;
    /**
     * @type {number}
     */
    domainLimit: number;
    /**
     * @type {boolean}
     */
    overPlanAllowed: boolean;
    /**
     * @type {boolean}
     */
    terytCodes: boolean;
    /**
     * @type {boolean}
     */
    excelAddIn: boolean;
    /**
     * @type {boolean}
     */
    jpkVat: boolean;
    /**
     * @type {boolean}
     */
    cli: boolean;
    /**
     * @type {boolean}
     */
    stats: boolean;
    /**
     * @type {boolean}
     */
    nipMonitor: boolean;
    /**
     * @type {boolean}
     */
    searchByNIP: boolean;
    /**
     * @type {boolean}
     */
    searchByREGON: boolean;
    /**
     * @type {boolean}
     */
    searchByKRS: boolean;
    /**
     * @type {boolean}
     */
    funcIsActive: boolean;
    /**
     * @type {boolean}
     */
    funcGetInvoiceData: boolean;
    /**
     * @type {boolean}
     */
    funcGetAllData: boolean;
    /**
     * @type {boolean}
     */
    funcGetVIESData: boolean;
    /**
     * @type {boolean}
     */
    funcGetVATStatus: boolean;
    /**
     * @type {boolean}
     */
    funcGetIBANStatus: boolean;
    /**
     * @type {boolean}
     */
    funcGetWhitelistStatus: boolean;
    /**
     * @type {boolean}
     */
    funcSearchVAT: boolean;
    /**
     * @type {number}
     */
    invoiceDataCount: number;
    /**
     * @type {number}
     */
    allDataCount: number;
    /**
     * @type {number}
     */
    firmStatusCount: number;
    /**
     * @type {number}
     */
    vatStatusCount: number;
    /**
     * @type {number}
     */
    viesStatusCount: number;
    /**
     * @type {number}
     */
    ibanStatusCount: number;
    /**
     * @type {number}
     */
    whitelistStatusCount: number;
    /**
     * @type {number}
     */
    searchVATCount: number;
    /**
     * @type {number}
     */
    totalCount: number;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
