export = PKD;
/**
 * PKD
 */
declare function PKD(): void;
declare class PKD {
    /**
     * @type {string}
     */
    code: string;
    /**
     * @type {string}
     */
    description: string;
    /**
     * @type {boolean}
     */
    primary: boolean;
    /**
     * @type {string}
     */
    version: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
