import Ember from 'ember';

const {
  Service,
  inject: { service },
  RSVP,
  isEmpty
} = Ember;

export default Service.extend({
  session: service('session'),
  store: service('store'),
  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      let userId = this.get('session.data.authenticated.id');
      if (!isEmpty(userId)) {
        return this.get('store').find('user', userId).then((user) => {
          this.set('currentUser', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
