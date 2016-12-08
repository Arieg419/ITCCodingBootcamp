function productOfOthers(arr) {
	var beforeIndex = [1];
    var afterIndex = [1];
    
    arr.forEach(function(element, index, array) {
        if(index == array.length -1) {
            return;
        }
    	beforeIndex.push(element*beforeIndex[index]);
    });
    
    // console.log(beforeIndex);
    
    var reversedArr = arr.slice().reverse(); // slice creates extra copy of arr
    
    reversedArr.forEach(function(element, index, array) {
        if(index == array.length -1) {
            return;
        }
    	afterIndex.push(element*afterIndex[index]);
    });
    
    afterIndex.reverse();
    
    // console.log(afterIndex);
    
    var res = [];
    afterIndex.forEach(function(element,index, array) {
    	res.push(element * beforeIndex[index]);
    });
    
    
    return res;
}

// *************** Testing *******************

var input = [1, 7, 3, 4];
// output should be [84, 12, 28, 21]

var input2 = [1,2,6,5,9];
// output should be [540, 270, 90, 108, 60]

var input3 = [3, 1, 2, 5, 6, 4];
// output should be [240, 720, 360, 144, 120, 180]

var input4 = [1];
console.log(productOfOthers(input));
console.log(productOfOthers(input2));
console.log(productOfOthers(input3));
console.log(productOfOthers(input4));
