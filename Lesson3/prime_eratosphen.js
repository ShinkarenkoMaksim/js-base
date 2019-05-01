var i = 2;
var booleanArray = [false, false]; //Булевый массив более эффективен в использовании памяти
var limitNumbers = +prompt("Введите число, не меньше 2, не больше 100 000 000");
var primeNumbers = [];

// Применим алгоритм "Решето Эратосфена""

// Составляем массив чисел от 2 до primeNumbers
while(i <= limitNumbers) {
	booleanArray.push(true);
	i++;
}

var i = 2;

// Помечаем составные числа значением false
while (i * i <= limitNumbers) {
	var j = i * i;
	if (booleanArray[i] == true) {
		while(j <= limitNumbers) {
			booleanArray[j] = false;
			j += i;
		}
	}
	i++;
}

//Заполняем итоговый массив простыми числами, используя индексы элементов булевого массива
i = 0;
while (i < booleanArray.length) {
	if (booleanArray[i] == true) {
		primeNumbers.push(i);
	}
	i++;
}

alert(primeNumbers.join(', '));

