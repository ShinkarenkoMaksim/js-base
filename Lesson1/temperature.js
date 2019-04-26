function tempFaren(tempCelc) {
    tempCelc = parseInt(prompt('Введите температуру по цельсию (допускаются только числа)'));
    if (isNaN(tempCelc)) {
        alert('Необходимо ввести число');
        tempFaren(tempCelc);
    } else
        alert('Температура по фаренгейту составляет ' + ((9 / 5) * tempCelc + 32) + ' градусов');
}
tempFaren();