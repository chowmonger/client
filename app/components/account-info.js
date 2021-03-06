import Ember from 'ember';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  session: service('session'),
  sessionAccount: service('session-account'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
