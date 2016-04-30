import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const {
  isEmpty,
  inject: { service }
} = Ember;

export default Base.extend({
  session: service(),
  authorize(jqXHR, requestOptions) {
    let accessToken = this.get('session.data.authenticated.token');
    if (this.get('session.isAuthenticated') && !isEmpty(accessToken)) {
      requestOptions('Authorization', `Bearer ${accessToken}`);
    }
  }
});
