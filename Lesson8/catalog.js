var products = [
	{
		id: 1,
		title: 'Черная куртка',
		photo: 'img/prod-1.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 150,
		link: '#',
	},
	{
		id: 2,
		title: 'Коричневая куртка',
		photo: 'img/prod-2.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 150,
		link: '#',
	},
	{
		id: 3,
		title: 'Черный дождевик',
		photo: 'img/prod-3.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 200,
		link: '#',
	},
	{
		id: 4,
		title: 'Футболка серая',
		photo: 'img/prod-4.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 100,
		link: '#',
	},
	{
		id: 5,
		title: 'Толстовка полосатая',
		photo: 'img/prod-5.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 170,
		link: '#',
	},
	{
		id:6,
		title: 'Худи сине-бежевый',
		photo: 'img/prod-6.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 150,
		link: '#',
	},
	{
		id: 7,
		title: 'Пиджак серый',
		photo: 'img/prod-7.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 250,
		link: '#',
	},
	{
		id: 8,
		title: 'Пальто коричневое',
		photo: 'img/prod-8.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 300,
		link: '#',
	},
	{
		id: 9,
		title: 'Футболка синяя',
		photo: 'img/prod-9.jpg',
		slides: 'img/slide-1-1.jpg img/slide-1-2.jpg img/slide-1-3.jpg',
		thmb: 'img/thmb-1-1.jpg img/thmb-1-2.jpg img/thmb-1-3.jpg',
		price: 300,
		link: '#',
	},
]



function buildCatalog() {
	var $catalog = document.querySelector('#catalog');
	
	
	for (var i = 0; i < products.length; i++) {
		var $template = $catalog.querySelector('#catalog_template').cloneNode(true);
		
		$template.querySelector('.featured__title').textContent = products[i].title;
		$template.querySelector('.featured__price').textContent = '$ ' + products[i].price;
		$template.querySelector('.products_item > img').src = products[i].photo;
		$template.querySelector('.featured__cart').dataset.id = products[i].id;
		$template.querySelector('.featured__cart').dataset.title = products[i].title;
		$template.querySelector('.featured__cart').dataset.photo = products[i].photo;
		$template.querySelector('.featured__cart').dataset.price = products[i].price;
		$template.querySelector('.featured__cart__img').dataset.id = products[i].id;
		$template.querySelector('.featured__cart__img').dataset.title = products[i].title;
		$template.querySelector('.featured__cart__img').dataset.photo = products[i].photo;
		$template.querySelector('.featured__cart__img').dataset.price = products[i].price;
		
		var $productImg = $template.querySelector('.featured__hover');
		$productImg.classList.add('product__img');
		$productImg.dataset.title = products[i].title;
		$productImg.dataset.slides = products[i].slides;
		$productImg.dataset.thmb = products[i].thmb;
		
		$template.style.display = 'block';
		$catalog.appendChild($template);
	}
}

buildCatalog();

function isExist(id) {
	for (var i = 0; i < cartItems.length; i++) {
		if (cartItems[i].id === id) {
			return true;
		}
	}
	return false;
}

function findIdx(id) {
	for (var i = 0; i < cartItems.length; i++) {
		if (cartItems[i].id === id) {
			return i;
		}
	}
}

if (JSON.parse(sessionStorage.getItem('key')) != null) {
	var cartItems = JSON.parse(sessionStorage.getItem("key"))
} else {
	var cartItems = [];
}

var $catalog = document.querySelector('#catalog');
$catalog.addEventListener('click', handleCartClick);

function handleCartClick(event) {
	if (event.target.classList.contains('featured__cart') || event.target.classList.contains('featured__cart__img')) {
		event.preventDefault()
		if (isExist(+event.target.dataset.id)) {
			var idx = findIdx(+event.target.dataset.id);
			cartItems[idx].quantity++;
		} else {
			cartItems.push({
				id: +event.target.dataset.id,
				title: event.target.dataset.title,
				photo: event.target.dataset.photo,
				price: event.target.dataset.price,
				quantity: 1,
			});
		}
		sessionStorage.setItem('key', JSON.stringify(cartItems));
	}
}

function countBasketPrice(cartItems) {
	var totalCost = 0;
	var totalProd = 0;
	for (var i = cartItems.length - 1; i >= 0; i--) {
		totalCost += cartItems[i].price * cartItems[i].quantity;
		totalProd += cartItems[i].quantity;
	}
	return;
}

