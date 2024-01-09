/**
 * @description A type to set the type of a property/variable/parameter depending
 * on another property/variable/parameter with type boolean.
 *
 * @example
 * // type of property b depends on a being true or false
 * type Example<B extends boolean> = {
 *     a: B;
 *     b: Conditional<B, string, undefined>;
 * }
 */
export type Conditional<B extends boolean, X, Y> = B extends true
    ? X
    : Y;

/**
 * @description A type to define the type of the default import with the import function.
 *
 * @example
 * // 'pathToSomeJSFile' points to a es-module with export default
 * const {
 *     default: { example },
 * }: DefaultImport<{ example: string}> = await import('pathToSomeJSFile');
 */
export type DefaultImport<T> = {
    default: T;
};

/**
 * @description A type to declare an object as key -> string, value -> string pair
 */
export type Dictionary = Record<string, string>;

/**
 * @description A simple type for email string structure.
 */
export type EMail = `${string}@${string}.${string}`;

/**
 * @description A union type, which includes some http-methods (verbs).
 */
export type HttpMethod =
    | 'checkout'
    | 'copy'
    | 'delete'
    | 'get'
    | 'head'
    | 'lock'
    | 'merge'
    | 'mkactivity'
    | 'mkcol'
    | 'move'
    | 'm-search'
    | 'notify'
    | 'options'
    | 'patch'
    | 'post'
    | 'purge'
    | 'put'
    | 'report'
    | 'search'
    | 'subscribe'
    | 'trace'
    | 'unlock'
    | 'unsubscribe';

/**
 * @description A simple type for IPv4 string structure.
 */
export type IPv4 = `${number}.${number}.${number}.${number}`;

/**
 * @description A simple type for MAC-Address string structure.
 */
export type MacAddress =
    | `${string}-${string}-${string}-${string}-${string}-${string}`
    | `${string}:${string}:${string}:${string}:${string}:${string}`;

/**
 * @description A simple type for strings, which only include digits.
 */
export type NumberString = `${number}`;

/**
 * @description A simple type to represent all possible strings for the typeof operator.
 */
export type TypeOf =
    | 'bigint'
    | 'boolean'
    | 'function'
    | 'number'
    | 'object'
    | 'string'
    | 'symbol'
    | 'undefined';

/**
 * @description A simple type for UUID string structure.
 */
export type UUID = `${string}-${1 | 2 | 3 | 4 | 5}${string}-${
    | 8
    | 9
    | 'a'
    | 'A'
    | 'b'
    | 'B'}${string}-${string}`;
