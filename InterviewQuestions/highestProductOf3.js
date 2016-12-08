function highestProductOf3(arr) {
	if(arr.length < 3) {
		throw new Error("Array must be of min length of atleast 3");
	}

	var biggestTwo = [0,0];
	var smallestTwo = [0,0];

	// creating smallestTwo and biggestTwo arrays
	for(var i = 0; i < arr.length; i++) {

		// biggestTwo
		if(arr[i] > biggestTwo[1]) {
			var temp = biggestTwo[1];
			biggestTwo[1] = arr[i];
			biggestTwo[0] = temp;
		}
		else if(arr[i] > biggestTwo[0]) {
			biggestTwo[0] = arr[i];
		}

		// smallestTwo
		if(arr[i] < smallestTwo[0]) {
			var temp = smallestTwo[0];
			smallestTwo[0] = arr[i];
			smallestTwo[1] = temp;
		}
		else if(arr[i] < biggestTwo[1]) {
			smallestTwo[1] = arr[i];
		}
	}

	console.log(biggestTwo);
	console.log(smallestTwo);

	// search for third digit to add to project
	var max = 0;
	var min = 0;
	biggestTwoProduct = biggestTwo[0] * biggestTwo[1];
	smallestTwoProduct = smallestTwo[0] * smallestTwo[1];

	console.log(biggestTwoProduct, smallestTwoProduct);

	for(var i = 0; i < arr.length; i++) {
		if(arr[i] * biggestTwoProduct > max) {
			max = arr[i] * biggestTwoProduct;
		}		

		if(arr[i] * smallestTwoProduct > max) {
			max = arr[i] * smallestTwoProduct;
		}	
	}

	return max;

}

var arr = [1, 10, -5, 1, -100];
console.log(highestProductOf3(arr));