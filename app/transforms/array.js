// https://gist.github.com/Samsinite/b775f3f0ce1a02a37424
import Ember from 'ember';
import DS from 'ember-data';

const { Transform } = DS;
const { A } = Ember;

export default Transform.extend({
  serialize(deserialized) {
    return !!deserialized ? deserialized.toArray() : null;
  },
  deserialize(serialized) {
    return A(serialized);
  }
});
