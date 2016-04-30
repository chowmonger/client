import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  actions: {
    register() {
      this.sendAction('register');
    }
  }
});
