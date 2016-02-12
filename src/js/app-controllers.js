app.controller('MainController', ['$scope', 'Store', '$http', function ($scope, Store, $http) {
	
	$scope.addProduct = function(){
		if($scope.name === undefined || $scope.code === undefined || $scope.quantity === undefined)
				return;

		var product ={
			"name" : $scope.name,
			"code" : $scope.code, 
			"quantity" : $scope.quantity
		};

		Store.addProduct(product);

		$scope.store = Store.store;
			
	};

	$scope.modifyProduct = function(product){

	};

	$scope.removeProduct = function(product){
			Store.deleteProduct(product);
	};

}]);