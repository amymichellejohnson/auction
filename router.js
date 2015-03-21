Auction.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('lots', {path: '/lots'});
  this.resource('lot', {path: 'lots/:lot_id'});
  this.resource('viewlots', {path: '/viewlots'});
  this.resource('viewlot', {path: 'viewlots/:lot_id'});
  this.resource('about', {path: '/about'});
  this.resource('products');
  this.resource('product', {path: 'products/:product_id'});
  this.resource('viewproduct', {path: 'viewproducts/:product_id'});
});
