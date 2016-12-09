import makeNestedObject from 'ember-changeset/utils/make-nested-object';
import { module, test } from 'qunit';

module('Unit | Utility | make nested object');

test('it works with 1 level of nesting', function(assert) {
  let path = 'foo.bar'.split('.');
  let result = makeNestedObject({}, ...path);
  assert.deepEqual(result, {
    foo: {
      bar: undefined
    }
  });
});

test('it works with 2 levels of nesting', function(assert) {
  let path = 'foo.bar.baz'.split('.');
  let result = makeNestedObject({}, ...path);
  assert.deepEqual(result, {
    foo: {
      bar: {
        baz: undefined
      }
    }
  });
});

test('it works with 3 levels of nesting', function(assert) {
  let path = 'foo.bar.baz.qux'.split('.');
  let result = makeNestedObject({}, ...path);
  assert.deepEqual(result, {
    foo: {
      bar: {
        baz: {
          qux: undefined
        }
      }
    }
  });
});
