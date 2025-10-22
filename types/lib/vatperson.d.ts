export = VATPerson;
/**
 * VAT registry person
 */
declare function VATPerson(): void;
declare class VATPerson {
    /**
     * @type {string}
     */
    companyName: string;
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
    nip: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
