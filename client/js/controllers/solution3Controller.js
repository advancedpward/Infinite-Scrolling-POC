is.controller('solution3Controller', function($scope, Reddit) {
	$scope.items = generateItems(1000);
});

function generateItems(count) {
  var items = [];
  var ids = [];
  while(count--) {
    var id;
    do {
      id = Math.round(Math.random() * 1000000);
    } while (ids.indexOf(id) !== -1);

    items.push({
      'id': id,
      'text': 'Item ID=' + id
    });
  }
  return items;
};
