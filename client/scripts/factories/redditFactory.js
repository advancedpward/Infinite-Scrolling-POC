// Reddit constructor function to encapsulate HTTP and pagination logic
is.factory('Reddit', function($http) {
  var Reddit = function() {
    this.items = [];
    this.extraItems = [];
    this.busy = false;
    this.after = '';
    this.ticker = 0;
  };
  Reddit.prototype.nextPage = function() {
    this.ticker++;
    console.log(this.ticker + ' APIs calls made');
    if (this.busy) return;
    this.busy = true
    var url = "http://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";
    $http.jsonp(url).success(function(data) {
      var items = data.data.children;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i].data);
        this.extraItems.push(items[i].data);
      }
      this.after = "t3_" + this.items[this.items.length - 1].id;
      this.busy = false;
    }.bind(this));
  };
  return Reddit;
});