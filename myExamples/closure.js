function say(name){
	return function(lastName){
		return name + " " + lastName;
	}
}

var x = say('Ilya');
print(x('Snake')); //it will print --> Ilya Snake