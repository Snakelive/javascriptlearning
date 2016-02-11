//We have a function
function some(){
	print("Hello world");
}

//We have a object with method which use the function as declaration
var obj = {
	someMethod: some; //We don't use brackets and get declaration
	soneMethod1: some();//We use brackets and just call the function
}