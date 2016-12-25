console.log("Running Driver...");

// Should create Jackson Instance
var element = $Jackson.createJacksonInstance("#element");
console.log("new jackson obj is ", element);

// Should set DOM node with ID of 'element' innerHTML 
element.html("Hello world!");

// Should get innerHTML of DOM node with #element ID
console.log(element.html());

// Should remove class 'redClass' from 'element'
element.removeClass("redClass");

// Should add class 'yellowClass' from 'element'
element.addClass("yellowClass");

// this will be an array holding every DOM node with class "two"
var list = $Jackson.createJacksonInstance(".list");
console.log("Array of elements with 'two' class ", list);

// Should add attribute alt with value of randomString to list class
list.attr('alt', 'randomString');



