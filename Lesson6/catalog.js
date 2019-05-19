var products = [
	{
		title: 'Черная куртка',
		photo: 'img/prod-1.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 150,
		link: '#',
	},
	{
		title: 'Коричневая куртка',
		photo: 'img/prod-2.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 150,
		link: '#',
	},
	{
		title: 'Черный дождевик',
		photo: 'img/prod-3.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 200,
		link: '#',
	},
	{
		title: 'Футболка серая',
		photo: 'img/prod-4.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 100,
		link: '#',
	},
	{
		title: 'Толстовка полосатая',
		photo: 'img/prod-5.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 170,
		link: '#',
	},
	{
		title: 'Худи сине-бежевый',
		photo: 'img/prod-6.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 150,
		link: '#',
	},
	{
		title: 'Пиджак серый',
		photo: 'img/prod-7.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 250,
		link: '#',
	},
	{
		title: 'Пальто коричневое',
		photo: 'img/prod-8.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 300,
		link: '#',
	},
]



function catalogList(productArray) {
	var $catalog = document.querySelector('#catalog');
	$catalog.addEventListener('click', handleButtonClick);
	for (var i = 0; i < productArray.length; i++) {
		
		var $productContainer = document.createElement('a');
		$productContainer.classList.add('product');
		$productContainer.href = productArray[i].link;
		
		var $productImg = document.createElement('img');
		$productImg.classList.add('product__img');
		$productImg.src = productArray[i].photo;
		$productImg.dataset.title = products[i].title;
		$productImg.dataset.slides = products[i].slides;
		$productImg.dataset.thmb = products[i].thmb;
		
		var $productTitle = document.createElement('h3');
		$productTitle.classList.add('product__title');
		$productTitle.textContent = productArray[i].title;
		
		var $productPrice = document.createElement('p');
		$productPrice.classList.add('product__price');
		$productPrice.textContent = '$' + productArray[i].price;
		
		var $button = document.createElement('button');
		$button.classList.add('btn__cart');
		$button.dataset.product = products[i].title;
		$button.textContent = 'Купить';
		
		$productContainer.appendChild($productImg);
		$productContainer.appendChild($productTitle);
		$productContainer.appendChild($productPrice);
		$productContainer.appendChild($button);
		
		$catalog.appendChild($productContainer);
	}
	
	return $catalog;
}

catalogList(products);


//=====================Cart==========================//

var cartItems = [];

function handleButtonClick(event) {
	if(event.target.classList.contains('btn__cart')) {
		event.preventDefault();
		for (var i = 0; i < products.length; i++) {
			for (var j = 0; j < cartItems.length; j++) {
				if (cartItems[j].title == event.target.dataset.product) {
					cartItems[j].quantity++;
					$cart.innerHTML = '';
					$cart.appendChild(countBasketPrice(cartItems));
					return;
				}
			}
			if (products[i].title == event.target.dataset.product) {
				cartItems.push(products[i]);
				products[i].quantity = 1;
				$cart.innerHTML = '';
				$cart.appendChild(countBasketPrice(cartItems));
				return;
			}
		}
	}
}

function countBasketPrice(cartItems) {
	var totalCost = 0;
	var totalProd = 0;
	for (var i = cartItems.length - 1; i >= 0; i--) {
		totalCost += cartItems[i].price * cartItems[i].quantity;
		totalProd += cartItems[i].quantity;
	}
	var $message = document.createElement('p');
	$message.textContent = ('В корзине: '+ totalProd +' товар' + correctMessage(totalProd) + ' на сумму '+ totalCost +' долларов США');
	if (totalProd > 0) {
		return $message;
	}
	$message.textContent = ('Корзина пуста');
	return $message;
}

function correctMessage(totalProd) {
	if (totalProd < 10 || totalProd > 20) {
		totalProd = totalProd + '';
		var lastNum = totalProd[totalProd.length - 1];
    if (lastNum == 1) return '';
    if (1 < lastNum && lastNum < 5) return 'а';
    return 'ов';
	}
	return 'ов';
}

var $cart = document.getElementById('cart');
$cart.appendChild(countBasketPrice(cartItems));