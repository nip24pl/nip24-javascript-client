export = IBANStatus;
/**
 * IBAN status info
 */
declare function IBANStatus(): void;
declare class IBANStatus {
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
    regon: string;
    /**
     * @type {string}
     */
    iban: string;
    /**
     * @type {boolean}
     */
    valid: boolean;
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
