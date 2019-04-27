function power(val, pow) {
	if (pow == 0) {
		return (val == 0) ? 'Значение не определено' : 1;
	} else if (pow == 1) {
		return val;
	}
	return (pow > 0) ? val * power(val, (pow - 1)) : 1 / (val * power(val, (Math.abs(pow) - 1)));
}

function cyclePromptVal() {
	var a = prompt('Введите число, которое хотите возвести в степень')
	if (a == '' || a == null) {
		alert('Необходимо ввести значение')
		cyclePromptVal()
	} else if (isNaN(a)) {
		alert('Допускается вводить только числа')
		cyclePromptVal()
	}
	return a;
}

function cyclePromptPow() {
	var b = prompt('Введите степень, в которую хотите возвести число (допустимы только целые значения)')
	if (b == '' || b == null) {
		alert('Необходимо ввести значение')
		cyclePromptPow()
	} else if (b % 1 != 0) {
		alert('Допускается вводить только целые числа')
		cyclePromptPow()
	} else if (isNaN(b)) {
		alert('Допускается вводить только числа')
		cyclePromptPow()
	}
	return b;
}

alert(power(cyclePromptVal(), cyclePromptPow()))

//Поиск значения числа в дробной или иррациональной (молчу о комплексных числах) степени не реализован, т.к. я не уверен, что это возможно реализовать на уровне моих знаний за несколько вечеров)))