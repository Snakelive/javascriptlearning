var y = 0;
function foo(x){
	if(x){
		console.log(y);
	}else{
		var y = 2;
		console.log(y);
	}
}
foo(true);






/*
	var num = 224;
	var str = "На дереве сидит " + num + " ворон";
	var x = "";

	if(num%100 < 11 || num%100 > 14){
		switch(num%10){
		case 1: x = "а"; break;
		case 2:
		case 3:
		case 4: x = "ы"
		}
	}
	console.log(str + x);



putstr("Enter number: ");
var num = readline();
putstr("Enter exp: ");
var exp = readline();
var result = 1;
var cnt = 1;

while(cnt <= exp){
	result *= num;
	cnt++;
}
print(result);



** Просто пусто файл	 
*/

//var name = 'John';
//print("Hello, " + name); //не ecmascript 