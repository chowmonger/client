import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model(params) {
    return this.store.findRecord('truck', params.truck_id);
  },
  actions: {
    focused() {
      this.transitionTo('map.panel');
    }
  },
  afterModel() {
    let truck = this.modelFor('map.panel.truck');
    this.controllerFor('map').setMapLocation(truck);
  }
});
