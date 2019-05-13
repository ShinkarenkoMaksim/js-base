function numToObj(num) {
	var objNum = {};
	if (isNaN(num)) {
		console.log('Введено не число')
		return {};
	} else if (num % 1 != 0) {
		console.log('Введено нецелое число');
		return {};
	} else if (num < 0) {
		console.log('Введено число, меньше 0');
		return {};
	} else if (num == null || num.length == 0) {
		console.log('Ничего не введено');
		return {};
	} else if (num.length > 3) {
		console.log('Введено число, больше 999');
		return {};
	}
	
	var numString = num + '';
	var keys = ['units', 'dozen', 'hundreds',];
	
	for (var i = numString.length - 1; i >= 0; i--) {
		var key = keys[numString.length - 1 - i];
		objNum[key] = numString[i];
	}
	return objNum;
}
var num = prompt('Введите целое число, от 0 до 999');

console.log(numToObj(num));