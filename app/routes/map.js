import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend({
  session: service('session'),
  sessionAccount: service('session-account'),
  store: service(),
  socket: service(),
  model() {
    return this.store.findAll('truck');
  },
  afterModel() {
    let chan = this.get('socket').joinChannel('trucks');

    chan.on('change', (payload) => {
      this.get('store').findRecord('truck', payload.id, { reload: true });
    });
  }
});
