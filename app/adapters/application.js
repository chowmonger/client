import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'chowmonger-ember/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.HOST_URL,
  namespace: 'api/v1',
  authorizer: 'authorizer:custom',

  urlForCreateRecord(modelName/*, snapshot*/) {
    switch (modelName) {
      case 'user':
      case 'users':
        return this._super.apply(this, arguments).replace('users', 'register');
      default:
        return this._super(...arguments);
    }
  }
});
