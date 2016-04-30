import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: ['model:truck']
});

test('it exists', function(assert) {
  let model = this.store().modelFor('user');
  assert.ok(!!model);
});
