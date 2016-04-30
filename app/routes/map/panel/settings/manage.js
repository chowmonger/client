import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend({
  session: service('session'),
  sessionAccount: service('session-account'),
  store: service(),
  model() {
    let user = this.get('sessionAccount.currentUser');

    let truck = user.get('truck').then((truck) => {
      return truck;
    });

    return truck;
  }
});
