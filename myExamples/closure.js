function say(name){
	return function(lastName){
		return name + " " + lastName;
	}
}

var x = say('Ilya');
print(x('Snake')); //We'll get --> Ilya Snake


//With comments
function say(name){
	//This is anonymous function - it no needs a name. it returns as result of "say" function executing and throw to "x" variable.
	return function(lastName){
		return name + " " + lastName;
	}
}

var x = say('Ilya'); //this variable get the result of "say" function executing with added parameter. it get anonymous function.
//Now "x" variable contents DECLARATION of anonymous function. And we call this function with new parameter.
print(x('Snake')); //We get "Ilya Snake" 