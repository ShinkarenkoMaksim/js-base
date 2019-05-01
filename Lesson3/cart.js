// Элементы по порядку: наименование, цвет, размер, стоимость товара, кол-во товара, стоимость доставки

var cartItems = [
	['T-shirt', 'red', 'XS', 150, 2, 0],
	['Jacket', 'green', 'S', 250, 1, 0],
	['Shorts', 'black', 'S', 125, 2, 50],
	['Pants', 'yellow', 'L', 300, 1, 0]
];

function countBasketPrice(cartItems) {
	var totalCost = 0;
	for (var i = cartItems.length - 1; i >= 0; i--) {
		totalCost += cartItems[i][3] * cartItems[i][4] + cartItems[i][5];
	}
	return totalCost;
}

alert(countBasketPrice(cartItems));