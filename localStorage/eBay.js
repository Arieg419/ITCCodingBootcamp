function Cart() {
	this.products  = []; 
}

Cart.prototype.displayCart = function displayCart() {
	// Checks if products were previously stored
	if(localStorage.getItem("products") !== null) {
		this.products = JSON.parse(localStorage.products);
	} else {
		this.products = [];
	}

	// Populates Cart
	var cartDOM = document.getElementById("cart");
	cartDOM.innerHTML = "";
	for(var i = 0; i < this.products.length; i++) {
		console.log("printing products", this.products);
	    var currItem = this.products[i];
	    var product = document.createElement("li");
	    product.innerHTML = currItem;
	    product.className = "title";
		cartDOM.appendChild(product);
	}

	// Appending Delete Button if cart has products
	if(this.isEmpty()) {
		var deleteBtn = document.createElement("button");
		deleteBtn.innerHTML = "Empty Cart";
		deleteBtn.className = "delete";

		var myCart = this;
		// when calling method on deleteBtn, 'this' becomes deleteBtn and we lose the context of myCart
		// this is why we save a reference to myCart as 'this'
		deleteBtn.addEventListener("click", function() {
			myCart.clearCart();
		});
		cartDOM.appendChild(deleteBtn);
	}

};

Cart.prototype.isEmpty = function() {
	if(this.products.length) {
		return true;
	} else {
		return false;
	}
};

Cart.prototype.clearCart = function() {
	localStorage.clear();
	this.displayCart();
};

Cart.prototype.addToCart = function(productName) {
	this.products.push(productName);
	localStorage.setItem("products", JSON.stringify(this.products));
	console.log(localStorage.products);
	this.displayCart();
};



// Instantiating our JS Cart
var myCart = new Cart();
myCart.displayCart();

// The JS for our shop
var productArr = [];
productArr = document.getElementsByClassName("product");

for(var i = 0 ; i < productArr.length; i ++) {
	productArr[i].addEventListener("click", function(e) {
		console.log(e);
		myCart.addToCart(e.target.id);
	});
}
