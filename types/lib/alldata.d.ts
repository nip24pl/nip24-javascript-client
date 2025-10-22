export = AllData;
/**
 * All firm data
 */
declare function AllData(): void;
declare class AllData {
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
    type: string;
    /**
     * @type {string}
     */
    name: string;
    /**
     * @type {string}
     */
    shortName: string;
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
     * @type {string}
     */
    street: string;
    /**
     * @type {string}
     */
    streetCode: string;
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
    cityCode: string;
    /**
     * @type {string}
     */
    community: string;
    /**
     * @type {string}
     */
    communityCode: string;
    /**
     * @type {string}
     */
    county: string;
    /**
     * @type {string}
     */
    countyCode: string;
    /**
     * @type {string}
     */
    state: string;
    /**
     * @type {string}
     */
    stateCode: string;
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
     * @type {Date}
     */
    creationDate: Date;
    /**
     * @type {Date}
     */
    startDate: Date;
    /**
     * @type {Date}
     */
    registrationDate: Date;
    /**
     * @type {Date}
     */
    holdDate: Date;
    /**
     * @type {Date}
     */
    renevalDate: Date;
    /**
     * @type {Date}
     */
    lastUpdateDate: Date;
    /**
     * @type {Date}
     */
    bankruptcyDate: Date;
    /**
     * @type {Date}
     */
    endOfBankruptcyProceedingsDate: Date;
    /**
     * @type {Date}
     */
    endDate: Date;
    /**
     * @type {string}
     */
    registryEntityCode: string;
    /**
     * @type {string}
     */
    registryEntityName: string;
    /**
     * @type {string}
     */
    registryCode: string;
    /**
     * @type {string}
     */
    registryName: string;
    /**
     * @type {Date}
     */
    recordCreationDate: Date;
    /**
     * @type {string}
     */
    recordNumber: string;
    /**
     * @type {string}
     */
    basicLegalFormCode: string;
    /**
     * @type {string}
     */
    basicLegalFormName: string;
    /**
     * @type {string}
     */
    specificLegalFormCode: string;
    /**
     * @type {string}
     */
    specificLegalFormName: string;
    /**
     * @type {string}
     */
    ownershipFormCode: string;
    /**
     * @type {string}
     */
    ownershipFormName: string;
    /**
     * @type {BusinessPartner[]}
     */
    businessPartner: BusinessPartner[];
    /**
     * @type {PKD[]}
     */
    pkd: PKD[];
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
import BusinessPartner = require("./businesspartner");
import PKD = require("./pkd");
