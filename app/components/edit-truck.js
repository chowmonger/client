import Ember from 'ember';

const {
  Component,
  computed,
  isEmpty,
  inject: { service }
} = Ember;

export default Component.extend({
  store: service('store'),
  editedMenuItems: [],
  newItemName: '',
  newItemPrice: '',
  isAddMenuItemDisabled: computed('newItemName', 'newItemPrice', function() {
    return isEmpty(this.get('newItemName'))  ||
           isEmpty(this.get('newItemPrice')) ||
           isNaN(parseFloat(this.get('newItemPrice')));
  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },

    save(truck) {
      this.get('editedMenuItems').forEach(function(entry) {
        entry.save();
      });

      truck.save();
    },

    addMenuItem(truck) {
      let controller = this.get('controller');

      let mItem = this.get('store').createRecord('menu-item', {
        truck,
        name: this.get('newItemName'),
        description: 'delete me',
        price: this.get('newItemPrice')
      });

      this.get('editedMenuItems').push(mItem);
      this.set('newItemName', '');
      this.set('newItemPrice', '');
    },

    deleteMenuItem(mItem) {
      mItem.deleteRecord();
      this.get('editedMenuItems').push(mItem);
    }
  }
});
