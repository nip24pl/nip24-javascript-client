export = WLStatus;
/**
 * Whitelist status info
 */
declare function WLStatus(): void;
declare class WLStatus {
    /**
     * @type {string}
     */
    uid: string;
    /**
     * @type {string}
     */
    nip: string;
    /**
     * @type {string}
     */
    iban: string;
    /**
     * @type {boolean}
     */
    valid: boolean;
    /**
     * @type {boolean}
     */
    virtual: boolean;
    /**
     * @type {number}
     */
    vatStatus: number;
    /**
     * @type {string}
     */
    vatResult: string;
    /**
     * @type {number}
     */
    hashIndex: number;
    /**
     * @type {number}
     */
    maskIndex: number;
    /**
     * @type {Date}
     */
    date: Date;
    /**
     * @type {string}
     */
    source: string;
    NOT_REGISTERED: number;
    ACTIVE: number;
    EXEMPTED: number;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
