/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'chowmonger-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.HOST_URL = 'http://localhost:4000';
    ENV.TOKEN_URL= 'http://localhost:4000/api/v1/token';
    ENV.REGISTER_URL = 'http://localhost:4000/api/v1/users';
    ENV.SOCKET_URL = 'ws://localhost:4000/socket';
    ENV.ADDRESS_URL= 'http://localhost:4000/api/v1/address';

    ENV['ember-cli-mirage'] = {
      enabled: false
    },
    ENV.contentSecurityPolicy = {
      'connect-src': ["'self'", "http://localhost:4000"]
    },
    ENV['simple-auth'] = {
      authorizer: 'authorizer:custom',
      crossOriginWhitelist: ['http://localhost:4000/'],
      authenticationRoute: 'map.panel.settings.login',
      routeAfterAuthentication: 'map.panel.settings.manage',
      routeIfAlreadyAuthenticated: 'map.panel.settings.manage'
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.contentSecurityPolicy = {
      'connect-src': ["'self'", "https://chowmonger-api.herokuapp.com"]
    },
    ENV['simple-auth'] = {
      authorizer: 'authorizer:custom',
      crossOriginWhitelist: ['https://chowmonger-api.herokuapp.com'],
      authenticationRoute: 'map.panel.settings.login',
      routeAfterAuthentication: 'map.panel.settings.manage',
      routeIfAlreadyAuthenticated: 'map.panel.settings.manage'
    }

    ENV.HOST_URL = 'https://chowmonger-api.herokuapp.com';
    ENV.TOKEN_URL= 'https://chowmonger-api.herokuapp.com/api/v1/token';
    ENV.REGISTER_URL= 'https://chowmonger-api.herokuapp.com/api/v1/users';
    ENV.SOCKET_URL = 'wss://chowmonger-api.herokuapp.com/socket';
    ENV.ADDRESS_URL= 'https://chowmonger-api.herokuapp.com/api/v1/address';
  }

  return ENV;
};
