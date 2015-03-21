Auction.LotRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('lot', params.lot_id);
  }
});
