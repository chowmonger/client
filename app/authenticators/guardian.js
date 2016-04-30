import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'chowmonger-ember/config/environment';

const {
  run,
  $,
  isEmpty,
  RSVP
} = Ember;

export default Base.extend({
  restore(data) {
    return new RSVP.Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate(options) {
    let session = {
      'data': {
        'attributes': {
          'email': options.identification,
          'password': options.password
        }
      }
    };

    return new RSVP.Promise((resolve, reject) => {
      $.ajax({
        url: ENV.TOKEN_URL,
        headers: {
          accept: 'application/vnd.api+json'
        },
        contentType: 'application/vnd.api+json',
        crossDomain: true,
        type: 'POST',
        data: JSON.stringify(session)
      }).then((response) => {
        run(() => {
          resolve({
            token: response.data.attributes.jwt,
            id: response.data.attributes.id
          });
        });
      }, (xhr) => {
        let response = JSON.parse(xhr.responseText);
        run(() => {
          reject(response);
        });
      });
    });
  },
  invalidate() {
    return RSVP.resolve();
  }
});
