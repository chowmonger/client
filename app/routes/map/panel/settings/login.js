import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend({
  session: service('session'),
  sessionAccount: service('session-account')
});
