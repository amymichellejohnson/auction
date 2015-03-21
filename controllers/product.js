Auction.ProductController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false)
    },

    delete: function(product) {
      if (confirm("Are you sure?")) {
      product.destroyRecord();
      this.transitionToRoute('lots');
      }
    }
  }
});
