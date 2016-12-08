// iterative solution. example 0, 1, 1, 2, 3, 5 ....
function fib(n) {
	if(n === 1 || n ===0) {
		return n;
	}

	return fib(n-1) + fib(n-2);
}

function fibIterative(n) {

    // edge cases:
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    } else if (n === 0 || n === 1) {
        return n;
    }

    // we'll be building the fibonacci series from the bottom up
    // so we'll need to track the previous 2 numbers at each step
    var prevPrev = 0;  // 0th fibonacci
    var prev = 1;      // 1st fibonacci
    var current;       // Declare current

    for (var x = 1; x < n; x++) {
        // Iteration 1: current = 2nd fibonacci
        // Iteration 2: current = 3rd fibonacci
        // Iteration 3: current = 4th fibonacci
        // To get nth fibonacci ... do n-1 iterations.
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}

var memo = {};

function fibber(n) {
// edge case: negative index
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    }

    // base case: 0 or 1
    else if (n === 0 || n === 1) {
        return n;
    }

    // see if we've already calculated this
    if (memo.hasOwnProperty(n)) {
        return memo[n];
    }

    // if(person.hasOwnProperty("firstname")) console.log("true");

    var result = fibber(n-1) + fibber(n-2);

    // memoize
    memo[n] = result;

    return result;
}



console.log(fib(4));
console.log(fibIterative(4));
console.log(fibber(6));