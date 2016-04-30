import Ember from 'ember';

const {
  Route,
  $,
  inject: { service }
} = Ember;

export default Route.extend({
  session: service('session'),
  queryParams: {
    search: {
      refreshModel: true,
      replace: true
    }
  },
  model(params) {
    if (params.search === '' || params.search === undefined) {
      return null;
    } else {
      return this.store.query('truck', { name: params.search });
    }
  },
  actions: {
    focused() {
      this.transitionTo('map.panel');
    },
    clearName() {
      let search = this.controllerFor('map.panel').get('search');

      if (search === '') {
        this.transitionTo('map');
      } else {
        this.controllerFor('map.panel').set('search', '');
        $('#sb').focus();
      }
    },
    settings() {
      if (this.get('session.isAuthenticated')) {
        this.transitionTo('map.panel.settings.manage', {
          queryParams: { search: '' }
        });
      } else {
        this.transitionTo('map.panel.settings.login', {
          queryParams: { search: '' }
        });
      }
    }
  }
});
