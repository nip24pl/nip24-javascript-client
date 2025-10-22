export = BusinessPartner;
/**
 * Business partner
 */
declare function BusinessPartner(): void;
declare class BusinessPartner {
    /**
     * @type {string}
     */
    regon: string;
    /**
     * @type {string}
     */
    firmName: string;
    /**
     * @type {string}
     */
    firstName: string;
    /**
     * @type {string}
     */
    secondName: string;
    /**
     * @type {string}
     */
    lastName: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
