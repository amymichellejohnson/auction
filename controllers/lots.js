Auction.LotsController = Ember.ArrayController.extend({
  isAdding: false,
  actions: {
    adding: function() {
      this.set('isAdding', true);
      console.log("got here");
    },

    cancel: function() {
      this.set('isAdding', false);
    },

    save: function() {
      var newLot = this.store.createRecord('lot', {
        title: this.get('title'),
        date: this.get('date'),
        lotphoto: this.get('lotphoto')
      });
      newLot.save();
      this.set('isAdding', false);

      this.set('title', null),
      this.set('date', null),
      this.set('lotphoto', null)
    },
    delete: function(lot) {
      if (confirm("Are you sure?")) {
      lot.destroyRecord();
      }
    }
  }
});
