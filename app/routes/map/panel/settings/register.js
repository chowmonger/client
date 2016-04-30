import Ember from 'ember';

const {
  Route,
  get,
  inject: { service }
} = Ember;

export default Route.extend({
  session: service('session'),
  sessionAccount: service('session-account'),
  flashMessages: service(),
  actions: {
    register() {
      let flashMessages = get(this, 'flashMessages');
      this.get('currentModel').save()
        .then(() => {
          this.transitionTo('map.panel.settings.login');
        })
        .catch((reason) => {
          flashMessages.add({
            message: reason.errors[0].detail || reason.errors[1].detail
          });
        });
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
