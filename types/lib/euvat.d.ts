/**
 * Normalizes form of the NIP number
 * @param {string} number input string
 * @return {string} normalized number
 */
export function normalize(number: string): string;
/**
 * Checks if specified NIP is valid
 * @param {string} number input number
 * @return {boolean} true if number is valid
 */
export function isValid(number: string): boolean;
