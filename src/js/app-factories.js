app.factory('Store', function(){  

	function StoreModel(){
		this.store = [];

		this.deleteProduct = function(product){
			var index = this.store.indexOf(product);
			this.store.splice(index, 1);
		};

		this.addProduct = function(product){

			var present = false;

			for(var i =0 ; i<this.store.length; i++){
				if(product.code === this.store[i].code){
					this.store[i] = product;
					present = true;
				}
			}

			if(!present)
				this.store.push(product);
		};

	}
	return new StoreModel();
});
