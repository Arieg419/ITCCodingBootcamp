(function(global) {

	/*
	we just iterate over the 
	elements we selected and 
	stick them onto the new 
	object with numeric indices. 
	Then, we add a length property.

	But what’s the point here? Why not just return the elements? 
	We’re wrapping the elements in an object because we want to be 
	able to create methods for the object; these are the methods 
	that will allow us to interact with those elements. This is 
	actually a boiled-down version of the way jQuery does it.
	*/
    function Jackson (els) { // accepts arrays so we can loop over them later
		for(var i = 0; i < els.length; i++ ) {
			this[i] = els[i];
    	}
    	this.length = els.length;
    }

    // ********************** UTILS **********************

    /*
	The getter is simpy a map() method. It creates a new array with 
	the results of calling a provided function 
	on every element in this array.
    */


    Jackson.prototype.getter = function(callback) {
	    var results = [];
	    var that = this;
	    for (var i = 0 ; i < this.length; i++) {
	        results.push(callback(that[i]));
	    }

	    return results;
	};

	// setter exists natively on Arrays and not on objects. Therefore, I create my own.
	// setter exists in order to make changes to the DOM. We don't need the return values! This is a setter.
	Jackson.prototype.setter = function(callback) {
		// Applying callback to all elements 
        for (var i = 0 ; i < this.length; i++) {
	        callback(this[i]);
	    }
        return this; 
    };

    Jackson.prototype.getOne = function (callback) {
	    var m = this.getter(callback);
	    return m.length > 1 ? m : m[0];
	};

	// ********************** END OF UTILS **********************

	Jackson.prototype.html = function (html) {
	    if (typeof html !== "undefined") { // set
	        this.setter(function (el) {
	            el.innerHTML = html;
	        });
	        return this;
	    } else { // get
	        return this.getOne(function (el) {
	            return el.innerHTML;
	        });
	    }
	};

	Jackson.prototype.addClass = function (classes) {
	    var className = "";
	    if (typeof classes !== "string") { // i was passed an array where each item holds a className
	        for (var i = 0; i < classes.length; i++) {
	            className += " " + classes[i];
	        }
	    } else {
	        className = " " + classes;
	    }
	    return this.setter(function (el) {
	        el.className += className;
	    });
	};

	Jackson.prototype.removeClass = function (classToRemove) {
	    return this.setter(function (el) {
	        var classArray = el.className.split(" ");
	        var i;
	 
	        while ( (i = classArray.indexOf(classToRemove)) > -1) { 
	            classArray = classArray.slice(0, i).concat(classArray.slice(++i));
	        }
	        el.className = classArray.join(" ");
	    }); 
	};

	Jackson.prototype.attr = function (attr, val) {
	    if (typeof val !== "undefined") { // setter
	        return this.setter(function(el) {
	            el.setAttribute(attr, val);
	        });
	    } else { // getter
	    	var ourCallback = function (el) {
	            return el.getAttribute(attr);
	        };

	        return this.getOne(function (el) {
	            return el.getAttribute(attr);
	        });
	    }
	};
    var jackson = {

    	/*
    	get function expects a CSS selector. for example a class or ID
    	we need an array to pass to our call to Jackson at the bottom there; as you can 
    	see, we’re returning a new Jackson object.
    	*/
        createJacksonInstance: function (selector) { // built to handle arrays
		    var els;
		    // if user passes string, fetch from DOM
		    if (typeof selector === "string") {
		        els = document.querySelectorAll(selector); // user already passed array of DOM elements
		    } else if (selector.length) { // this means we have received a NodeList
		        els = selector;
		    } else { // Single DOM node.
		        els = [selector];
		    }
		    return new Jackson(els);
		}

    };
      
    global.jackson = global.$Jackson = jackson; // points to Greetr

}(window));