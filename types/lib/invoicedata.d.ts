export = InvoiceData;
/**
 * Invoice data
 */
declare function InvoiceData(): void;
declare class InvoiceData {
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
    name: string;
    /**
     * @type {string}
     */
    firstName: string;
    /**
     * @type {string}
     */
    lastName: string;
    /**
     * @type {string}
     */
    street: string;
    /**
     * @type {string}
     */
    streetNumber: string;
    /**
     * @type {string}
     */
    houseNumber: string;
    /**
     * @type {string}
     */
    city: string;
    /**
     * @type {string}
     */
    postCode: string;
    /**
     * @type {string}
     */
    postCity: string;
    /**
     * @type {string}
     */
    phone: string;
    /**
     * @type {string}
     */
    email: string;
    /**
     * @type {string}
     */
    www: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
