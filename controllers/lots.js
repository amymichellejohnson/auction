Auction.LotsController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        title: this.get('title'),
        date: this.get('date'),
        lotphoto: this.get('lotphoto')
      });
      newLot.save();

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
