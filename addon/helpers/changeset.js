import Ember from 'ember';
import Changeset from 'ember-changeset';
import isChangeset from 'ember-changeset/utils/is-changeset';
import isPromise from 'ember-changeset/utils/is-promise';

const { Helper: { helper } } = Ember;

export function changeset([obj, validations]) {
  if (isChangeset(obj)) {
    return obj;
  }

  if (isPromise(obj)) {
    return obj.then((resolved) => new Changeset(resolved, validations));
  }

  return new Changeset(obj, validations);
}

export default helper(changeset);
