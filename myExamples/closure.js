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

var x = say('Ilya'); //This variable gets "say" function execution with parameter 'Ilya' as declaration of returned anonymous function.
					 //And this anonymous function already contents "name" parameter as "ilya" and remember it. 

//Now "x" variable contents DECLARATION of anonymous function with remembered parameter "name" inside of.
//We call "x" variable with brackets and this is executing anonymous function with new parameter.
print(x('Snake')); //We get "Ilya Snake" 

//Closure managed ^^