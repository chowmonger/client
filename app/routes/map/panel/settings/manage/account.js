import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend({
  sessionAccount: service('session-account'),
  model() {
    return this.get('sessionAccount.currentUser');
  }
});
