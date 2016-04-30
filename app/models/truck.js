import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import ENV from 'chowmonger-ember/config/environment';
import { belongsTo, hasMany } from 'ember-data/relationships';

const { run, observer, on, RSVP, $ } = Ember;

export default Model.extend({
  name: attr(),
  lat: attr(),
  lng: attr(),
  image: attr(),
  menuItems: hasMany('menu-item', { async: true }),
  categories: attr('array'),
  status: attr(),
  user: belongsTo('truck'),
  address: null,

  addressChanged: on('init', observer('lat', 'lng', function() {
    run.once(this, 'fetchAddress');
  })),

  fetchAddress() {
    let url = ENV.ADDRESS_URL;
    let latlng = {
      'data': {
        'attributes': {
          'lat': this.get('lat'),
          'lng': this.get('lng')
        }
      }
    };

    new RSVP.Promise((resolve, reject) => {
      $.ajax(
        url, {
          headers: {
            accept: 'application/vnd.api+json'
          },
          contentType: 'application/vnd.api+json',
          crossDomain: true,
          type: 'GET',
          data: latlng,
          success(response) {
            resolve(response.data.attributes.address);
          },
          error(reason) {
            reject(reason);
          }
        }
      );
    }).then((response) => {
      this.set('address', response);
    });

    this.set('address', 'calculating...');
  },
  editable: false,
  iconUrl: 'assets/images/markers/white/foodtruck.png'
});
