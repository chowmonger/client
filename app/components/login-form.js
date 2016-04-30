import Ember from 'ember';

const {
  Component,
  get,
  inject: { service }
} = Ember;

export default Component.extend({
  session: service('session'),
  sessionAccount: service('session-account'),
  flashMessages: service(),
  actions: {
    authenticate() {
      let flashMessages = get(this, 'flashMessages');
      let credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:guardian', credentials)
        .catch((reason) => {
          flashMessages.add({
            message: reason.errors[0].detail
          });
        });
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
