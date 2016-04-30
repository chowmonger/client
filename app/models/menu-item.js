import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  name: attr(),
  description: attr(),
  price: attr(),
  truck: belongsTo('truck'),
  formattedPrice: computed('price', function() {
    return `$${parseFloat(this.get('price'), 10).toFixed(2)}`;
  })
});
