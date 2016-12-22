(function(global) {

// 'new' an object
var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);   
};

// informal greetings
var greetings = {
	en: "Hello",
	es: "Hola"
};

// formal greetings
var formalGreetings = {
	en: "Greetings",
	es: "Saludos"
};

// log messages
var logMessages = {
	en: "Logged in",
	es: "Inició sesión"
};

// hidden within the scope of the IIFE and never directly accessible
var supportedLangs = ['en', 'es'];
    

Greetr.prototype = {
	// 'this' refers to the calling object at execution time
    fullName: function() {
        return this.firstName + ' ' + this.lastName;   
    },
    
    validate: function() {
        // check that is a valid language
        // references the externally inaccessible 'supportedLangs' within the closure
         if (supportedLangs.indexOf(this.language)  === -1) {
            throw "Invalid language";   
         }
    },
    
    // retrieve messages from object by referring to properties using [] syntax
    greeting: function() {
        return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
    	return formalGreetings[this.language] + ', ' + this.fullName();
    },

    // chainable methods return their own containing object
    greet: function(formal) {
        var msg;
        
        // if undefined or null it will be coerced to 'false'
        if (formal) {
            msg = this.formalGreeting();  
        }
        else {
            msg = this.greeting();  
        }

        if (console) {
            console.log(msg);
        }

        // 'this' refers to the calling object at execution time
        // makes the method chainable
        return this;
    },
    
    log: function() {
        if (console) {
            console.log(logMessages[this.language] + ': ' + this.fullName()); 
        }
        
        // make chainable
        return this;
    },
                        
    setLang: function(lang) {
        
        // set the language
        this.language = lang;
    
        // validate
        this.validate();
        
        // make chainable
        return this;
    },

    HTMLGreeting: function(element, formal) {

        if(!element) {
            throw new Error("Missing element!");
        }

        var msg;
        if(formal) {
            msg = this.formalGreeting();
        } else {
            msg = this.greeting();
        }

        element.innerHTML = msg;

        return this; // makes method chainable.

    }


};

// the actual object is created here, allowing us to 'new' an object without calling 'new'
Greetr.init = function(firstName, lastName, language) {
    
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.language = language || 'en';

    this.validate(); // checks that the language is supported!
    
};

Greetr.init.prototype = Greetr.prototype;

global.Greetr = global.G$ = Greetr; // points to Greetr

}(window));