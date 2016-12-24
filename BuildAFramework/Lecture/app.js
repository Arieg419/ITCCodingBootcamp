// Starting DOM manipulation
var loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(e) {

	// ************************* Our Business Logic *************************

	// Initializing an instance of our Greeter Object
	var loginGreeter = G$("Felicity", "Jones");

	// Hiding the Login Div display
	document.getElementById("logindiv").style.display = 'none'; // hiding element

	// Get Chosen Langugage
	var selectedLang = document.getElementById("lang").value;

	// Get Div to Display Greeting
	var targetDiv = document.getElementById("greeting");

	// ************************* Using our Famework *************************
	loginGreeter.setLang(selectedLang).HTMLGreeting(targetDiv, true).log();
});

// var g = G$('Darth', 'Vader');
// console.log(g);
// g.greet();
// console.log("***************");
// g.greet().greet(true);
// console.log("***************");
// g.greet().setLang('es').greet(true);