import { moduleForModel, test } from 'ember-qunit';

moduleForModel('truck', 'Unit | Model | truck', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

test('it exists', function(assert) {
  let model = this.store().modelFor('truck');
  assert.ok(!!model);
});
