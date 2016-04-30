import Ember from 'ember';
import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  name: attr(),
  password: attr(),
  email: attr(),
  truck: belongsTo('truck'),
  formattedName: computed('name', 'email', function() {
    let name = this.get('name');
    let email = this.get('email');
    return name || email;
  })
});
