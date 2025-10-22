/**
 * Normalizes form of the IBAN number
 * @param {string} iban input string
 * @return {string} normalized number
 */
export function normalize(iban: string): string;
/**
 * Checks if specified IBAN is valid
 * @param {string} iban input number
 * @return {boolean} true if number is valid
 */
export function isValid(iban: string): boolean;
