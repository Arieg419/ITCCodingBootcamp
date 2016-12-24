console.log("Running Driver...");

// Should create Jackson Instance
var one = $Jackson.createJacksonInstance("#one");
console.log("new jackson obj is ", one);

// Should set DOM node with ID of 'one' innerHTML 
one.html("Hello world!");

// Should get innerHTML of DOM node with #one ID
console.log(one.html());

// Should remove class 'redClass' from 'one'
one.removeClass("redClass");

// Should add class 'yellowClass' from 'one'
one.addClass("yellowClass");

// this will be an array holding every DOM node with class "two"
var twos = $Jackson.createJacksonInstance(".two");
console.log("Array of elements with 'two' class ", twos);

// Should add attribute alt with value of randomString to twos class
twos.attr('alt', 'randomString');



