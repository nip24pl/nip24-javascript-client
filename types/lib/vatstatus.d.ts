export = VATStatus;
/**
 * VAT status info
 */
declare function VATStatus(): void;
declare class VATStatus {
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
    name: string;
    /**
     * @type {number}
     */
    status: number;
    /**
     * @type {string}
     */
    result: string;
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
    NOT_REGISTERED: number;
    ACTIVE: number;
    EXEMPTED: number;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
