import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend(ApplicationRouteMixin, {
  sessionAccount: service('session-account'),

  beforeModel() {
    return this._loadCurrentUser();
  },
  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },
  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser();
  }
});
