import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  afterModel(truck, _transition) {
    truck.set('editable', true);
    truck.set('iconUrl', 'assets/images/markers/black/foodtruck.png');
  },
  deactivate() {
    let truck = this.modelFor('map.panel.settings.manage');
    truck.set('iconUrl', 'assets/images/markers/white/foodtruck.png');
    truck.set('editable', false);
  }
});
