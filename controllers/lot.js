Auction.LotController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var product = this.store.createRecord('product', {
        name: this.get('name'),
        description: this.get('description'),
        owner: this.get('owner'),
        startPrice: this.get('startPrice'),
        backstory: this.get('backstory'),
        photo: this.get('photo')
      });
      product.save();

      var lot = this.get('model');
      lot.get('products').pushObject(product);
      lot.save();

      this.set('name', null),
      this.set('description', null),
      this.set('owner', null),
      this.set('startPrice', null),
      this.set('backstory', null),
      this.set('photo', null)
    },
    delete: function(product) {
      if (confirm("Are you sure?")) {
      product.destroyRecord();
      var lot = this.get('model');
      lot.get('products').removeObject(product);
      }
    }
  }
});
