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
		case ('sum') :
			return(arg1 + arg2)
		case ('subtract'):
			return(arg1 - arg2)
		case ('multipl'):
			return(arg1 * arg2)
		case ('division'):
			return(arg1 / arg2)
	}
}