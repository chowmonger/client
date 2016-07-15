import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user', { async: true }),
  truck: belongsTo('truck', { async: true })
});
