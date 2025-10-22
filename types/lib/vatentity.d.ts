export = VATEntity;
/**
 * VAT registry entity
 */
declare function VATEntity(): void;
declare class VATEntity {
    /**
     * @type {string}
     */
    name: string;
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
    krs: string;
    /**
     * @type {string}
     */
    residenceAddress: string;
    /**
     * @type {string}
     */
    workingAddress: string;
    /**
     * @type {number}
     */
    vatStatus: number;
    /**
     * @type {string}
     */
    vatResult: string;
    /**
     * @type {VATPerson[]}
     */
    representatives: VATPerson[];
    /**
     * @type {VATPerson[]}
     */
    authorizedClerks: VATPerson[];
    /**
     * @type {VATPerson[]}
     */
    partners: VATPerson[];
    /**
     * @type {string[]}
     */
    ibans: string[];
    /**
     * @type {boolean}
     */
    hasVirtualAccounts: boolean;
    /**
     * @type {Date}
     */
    registrationLegalDate: Date;
    /**
     * @type {Date}
     */
    registrationDenialDate: Date;
    /**
     * @type {string}
     */
    registrationDenialBasis: string;
    /**
     * @type {Date}
     */
    restorationDate: Date;
    /**
     * @type {string}
     */
    restorationBasis: string;
    /**
     * @type {Date}
     */
    removalDate: Date;
    /**
     * @type {string}
     */
    removalBasis: string;
    NOT_REGISTERED: number;
    ACTIVE: number;
    EXEMPTED: number;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
import VATPerson = require("./vatperson");
