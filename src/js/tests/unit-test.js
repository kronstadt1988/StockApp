describe('OfficerValidationService Spec', function() {
	var Store;

	beforeEach(function() {
		angular.module('app');
	});

	beforeEach(inject(function() {
		var $injector = angular.injector(['app']);
		Store = $injector.get('Store');
	}));

	it('App is able to push different products with different codes', function(){
		Store.addProduct({"name" : "Soap", "code" : "001", "quantity" : 1});
		Store.addProduct({"name" : "Tomato", "code" : "002", "quantity" : 4});
		expect(Store.store.length).toBe(2);
	});

	it('App is able to recognize products already in Stock and Modify them', function(){
		Store.addProduct({"name" : "Soap", "code" : "001", "quantity" : 1});
		Store.addProduct({"name" : "Tomato", "code" : "001", "quantity" : 4});
		expect(Store.store.length).toBe(1); // Modifying, the length still will be 1.
	});
	it('App is able to remove products from Stock', function(){
		Store.addProduct({"name" : "Soap", "code" : "001", "quantity" : 1});
		Store.deleteProduct({"name" : "Soap", "code" : "001", "quantity" : 1});
		expect(Store.store.length).toBe(0); // Removing products the length will be 0
		});
});