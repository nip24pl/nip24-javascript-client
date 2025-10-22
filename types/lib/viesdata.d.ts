export = VIESData;
/**
 * VIES data
 */
declare function VIESData(): void;
declare class VIESData {
    /**
     * @type {string}
     */
    uid: string;
    /**
     * @type {string}
     */
    countryCode: string;
    /**
     * @type {string}
     */
    vatNumber: string;
    /**
     * @type {boolean}
     */
    valid: boolean;
    /**
     * @type {string}
     */
    traderName: string;
    /**
     * @type {string}
     */
    traderCompanyType: string;
    /**
     * @type {string}
     */
    traderAddress: string;
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
