function sum(a, b) {
	return(a + b);
}
function subtract(a, b) {
	return(a - b);
}
function multipl(a, b) {
	return(a * b);
}
function division(a, b) {
	return(a / b);
}

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case ('+') :
			return(sum(arg1, arg2));
		case ('-'):
			return(subtract(arg1, arg2));
		case ('*'):
			return(multipl(arg1, arg2));
		case ('/'):
			return(division(arg1, arg2));
	}
}