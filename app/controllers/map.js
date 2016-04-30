import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  lat: 41.881832,
  lng: -87.623177,
  zoom: 14,
  actions: {
    viewTruck(id) {
      this.transitionToRoute('map.panel.truck', id, {
        queryParams: { name: '' }
      });
    },
    updateLocation(truck, e) {
      let location = e.target.getLatLng();
      truck.set('lat', location.lat);
      truck.set('lng', location.lng);
    }
  },
  setMapLocation(truck) {
    this.set('lat', truck.get('lat'));
    this.set('lng', truck.get('lng'));
  }
});
