console.log("***************** COLORS ******************");
var colors = ['red', 'blue', 'green'];

// Let's move away from this :)
for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Create an array of numbers
var numbers = [1,2,3,4,5];

// Create a variable to hold the submitvar sum = 0;
var sum = 0;

for(var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Numbers with named funciton...");
console.log(sum);

console.log("***************** END OF NUMBERS ******************");


console.log("***************** ES6 Challenge ******************");

// ES6 Challenge

/*
The code below is calling 'savePost' three times, but it is doing so using a for loop.
This implementation works, but the for loop makes it more challenging to understand the purpose of the function.
Rather than using a for loop, refactor the code below to instead use the forEach helper.
*/


function savePost(post) {
  console.log(post)
};

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}
console.log("***************** END OF CHALLENGE 1 ******************");
/*
The array below contains an array of objects, each of which is a representation of an image.
Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.
The area of an image can be calculated as 'image.height * image.width'.
*/

console.log("***************** CHALLENGE 2 ******************");

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];


console.log("areas");
console.log(areas);

console.log("***************** END OF CHALLENGE 2 ******************");
