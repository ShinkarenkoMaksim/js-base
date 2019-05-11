var cartItems = [
	{
		title: 'T-shirt',
		color: 'red',
		size: 'XS',
		price: 150,
		amount: 2,
		delivery: 0,
	},
	{
		title: 'Jacket',
		color: 'green',
		size: 'S',
		price: 250,
		amount: 1,
		delivery: 0,
	},
	{
		title: 'Shorts',
		color: 'black',
		size: 'S',
		price: 125,
		amount: 2,
		delivery: 50,
	},
	{
		title: 'Pants',
		color: 'yellow',
		size: 'L',
		price: 300,
		amount: 1,
		delivery: 0,
	},
];

function countBasketPrice(cartItems) {
	var totalCost = 0;
	for (var i = cartItems.length - 1; i >= 0; i--) {
		totalCost += cartItems[i].price * cartItems[i].amount + cartItems[i].delivery;
	}
	return totalCost;
}

alert(countBasketPrice(cartItems));