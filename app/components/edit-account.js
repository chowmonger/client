import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  actions: {
    saveUser(user) {
      user.save();
    }
  }
});
