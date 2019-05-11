function objToNum() {
	var num = prompt('Введите целое число, от 0 до 999');
	var objNum = {};
	if (isNaN(num)) {
		console.log('Введено не число')
		return;
	} else if (num % 1 != 0) {
		console.log('Введено нецелое число');
		return;
	} else if (num < 0) {
		console.log('Введено число, меньше 0');
		return;
	} else if (num.length > 3) {
		console.log('Введено число, больше 999');
		return;
	} else if (num == null) {
		console.log('Не было ничего введено');
		return;
	}
	if (num.length == 3) {
		objNum.hundreds = num[0];
		num = num[1] + num[2];
	}
	if (num.length == 2) {
		objNum.tens = num[0];
		num = num[1];
	}
	if (num.length == 1) {
		objNum.units = num[0];
	}
	console.log(objNum);
	return objNum;
}

objToNum();
