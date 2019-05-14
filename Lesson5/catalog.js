var products = [
	{
		title: 'Черная куртка',
		photo: 'img/prod-1.jpg',
		price: 150,
		link: '#',
	},
	{
		title: 'Коричневая куртка',
		photo: 'img/prod-2.jpg',
		price: 150,
		link: '#',
	},
	{
		title: 'Черный дождевик',
		photo: 'img/prod-3.jpg',
		price: 200,
		link: '#',
	},
	{
		title: 'Футболка серая',
		photo: 'img/prod-4.jpg',
		price: 100,
		link: '#',
	},
	{
		title: 'Толстовка полосатая',
		photo: 'img/prod-5.jpg',
		price: 170,
		link: '#',
	},
	{
		title: 'Худи сине-бежевый',
		photo: 'img/prod-6.jpg',
		price: 150,
		link: '#',
	},
	{
		title: 'Пиджак серый',
		photo: 'img/prod-7.jpg',
		price: 250,
		link: '#',
	},
	{
		title: 'Пальто коричневое',
		photo: 'img/prod-8.jpg',
		price: 300,
		link: '#',
	},
]

function catalogList(productArray) {
	var $catalog = document.getElementById('catalog');
	for (var i = 0; i < productArray.length; i++) {
		var $productContainer = document.createElement('a');
		var $productImg = document.createElement('img');
		var $productTitle = document.createElement('h3');
		var $productPrice = document.createElement('p');
		
		$productContainer.classList.add('product');
		$productContainer.setAttribute('href', productArray[i].link);
		
		$productImg.classList.add('product__img');
		$productImg.setAttribute('src', productArray[i].photo);
		
		$productTitle.classList.add('product__title');
		$productTitle.textContent = productArray[i].title;
		
		$productPrice.classList.add('product__price');
		$productPrice.textContent = '$' + productArray[i].price;
		
		$productContainer.appendChild($productImg);
		$productContainer.appendChild($productTitle);
		$productContainer.appendChild($productPrice);
		
		$catalog.appendChild($productContainer);

	}
	return $catalog;
}

catalogList(products);