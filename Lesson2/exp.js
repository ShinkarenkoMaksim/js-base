function power(val, pow) {
	if (pow == 0) {
		return (val == 0) ? 'Значение не определено' : 1;
	} else if (pow == 1) {
		return val;
	}
	if (pow > 0) {
		return val * power(val, (pow - 1));
	} else {
		return 1 / (val * power(val, (Math.abs(pow) - 1)));
	}
}

var val, pow;

function cyclePromptVal() {
	val = prompt('Введите число, которое хотите возвести в степень');
	if (val == '' || val == null) {
		alert('Необходимо ввести значение');
		cyclePromptVal();
	} else if (isNaN(val)) {
		alert('Допускается вводить только числа');
		cyclePromptVal();
	}
	return val;
}

function cyclePromptPow() {
	pow = prompt('Введите степень, в которую хотите возвести число (допустимы только целые значения)');
	if (pow == '' || pow == null) {
		alert('Необходимо ввести значение');
		cyclePromptPow();
	} else if (pow % 1 != 0) {
		alert('Допускается вводить только целые числа');
		cyclePromptPow();
	} else if (isNaN(pow)) {
		alert('Допускается вводить только числа');
		cyclePromptPow();
	}
	return pow;
}

alert(power(cyclePromptVal(), cyclePromptPow()));

//Поиск значения числа в дробной или иррациональной (молчу о комплексных числах) степени не реализован, т.к. я не уверен, что это возможно реализовать на уровне моих знаний за несколько вечеров)))