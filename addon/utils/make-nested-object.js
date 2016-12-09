/**
 * Recursively constructs a (deeply) nested object according to a given path.
 * The object can then be set on another object to prepare its "schema" for
 * setting deeply nested values.
 *
 * ```js
 * let path = 'foo.bar.baz'.split('.');
 * makeNestedObject({}, ...path); // { foo: { bar: { baz: undefined } } };
 * ```
 *
 * @param {Object} acc accumulator object
 * @param {...String} keys
 * @returns {Object}
 */
export default function makeNestedObject(acc, ...keys) {
  let { length } = keys;

  if (length < 2) {
    return acc;
  }

  let [node, leaf] = keys.slice(length - 2, length);
  acc[node] = acc[node] || {};
  acc[node][leaf] = acc[leaf] || undefined;

  if (acc[leaf]) {
    delete acc[leaf];
  }

  return makeNestedObject(acc, ...keys.slice(0, length - 1));
}
