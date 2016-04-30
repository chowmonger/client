import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('map', function() {
    this.route('panel', function() {
      this.route('truck', { path: 'trucks/:truck_id' });
      this.route('settings', { path: '' }, function() {
        this.route('login');
        this.route('register');
        this.route('manage', function() {
          this.route('account');
          this.route('truck');
        });
      });
    });
  });
});

export default Router;
