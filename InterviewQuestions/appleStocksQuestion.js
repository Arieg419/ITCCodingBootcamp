// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500;.

// Write an efficient function that takes stockPricesYesterday and returns the best profit 
// I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.


function getMaxProfit(arr) {
	var minIdx = 0;
    var maxIdx = 1;
    var currMin = 0;
    var maxProfit = 0;

    if(arr.length < 2) {
        throw new Error("Need atleast two time periods to be profitable!");
    }
    
    for(var i = 1; i < arr.length; i++) {

        // new current min.
        if(arr[i] < arr[currMin]) { 
        	currMin = i;
        }
        
        // new best profit
        if(arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
                maxIdx = i;
            	minIdx = currMin;
        }

    }

    maxProfit  = arr[maxIdx] - arr[minIdx];
    return maxProfit;
}


var arr1 = [10, 7, 5, 8, 11, 9, 1];
var arr2 = [1];
console.log(getMaxProfit(arr1));