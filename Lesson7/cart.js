var cartItems = JSON.parse(sessionStorage.getItem("key"));
var $cartList = document.querySelector('#cart__items');
var $checkout_btn = document.querySelector('#checkout_btn');
var $cartTotal = document.querySelector('#cartTotal').children;
var $clearCartBtn = document.querySelector('#clearCartBtn');
var $btn_next = document.querySelector('#btn_next');
var $checkout = document.querySelector('#checkout');

function buildCart() {
	$cartList.innerHTML = '';
	if (cartItems !== null) {
		if (cartItems[0] != undefined) {
			for (var i = 0; i < cartItems.length; i++) {
				var $template = document.querySelector('#cart_template').cloneNode(true);
				
				$template.querySelector('.cart__descript__title').textContent = cartItems[i].title;
				$template.querySelector('.cart__col2').textContent = '$' + cartItems[i].price;
				$template.querySelector('.cart__img > img').src = cartItems[i].photo;
				$template.querySelector('.cart__quant').value = cartItems[i].quantity;
				$template.querySelector('.cart__quant').dataset.num = i;
				$template.querySelector('#prod_cost').textContent = productTotal(cartItems[i]);
				$template.style.display = 'flex';
				$template.querySelector('.cart__dellink').dataset.num = i;
				$template.querySelector('.cart__dellink i').dataset.num = i;
				$cartList.appendChild($template);
			}
		} else {
			$cartList.appendChild(cartEmptyMessage());
		}
		$cartTotal[0].innerHTML = 'Sub total';
		$cartTotal[1].innerHTML = 'GRAND TOTAL';
		$cartTotal[0].appendChild(countBasketPrice(cartItems));
		$cartTotal[1].appendChild(countBasketPrice(cartItems));
	}
}

function cartEmptyMessage() {
	$checkout_btn.classList.add('disabled');
	
	var $message = document.createElement('h3');
	$message.classList.add('cart__empty');
	$message.textContent = 'Cart is empty';
	return $message;
}

function countBasketPrice(cartItems) {
	var totalCost = 0;
	var totalProd = 0;
	if (JSON.parse(sessionStorage.getItem("key")) !== null) {
		for (var i = cartItems.length - 1; i >= 0; i--) {
			totalCost += cartItems[i].price * cartItems[i].quantity;
			totalProd += cartItems[i].quantity;
		}
	}
	var $totalCostMessage = document.createElement('span');
	$totalCostMessage.textContent = ('$'+ totalCost);
	return $totalCostMessage;
}

function productTotal(cartItems) {
	var $prod_cost = document.querySelector('#prod_cost');
	
	return cartItems.price * cartItems.quantity;
}

function handleQuantityChange(event) {
	if (event.target.value < 1) {
		event.target.value = 1;
		cartItems[+event.target.dataset.num].quantity = +event.target.value;
		sessionStorage.setItem("key", JSON.stringify(cartItems));
	}
	cartItems[+event.target.dataset.num].quantity = +event.target.value;
	sessionStorage.setItem("key", JSON.stringify(cartItems));
	buildCart();
}

function handleDeleteBtnClick(event) {
	if (event.target.classList.contains('cart__dellink') || event.target.parentNode.classList.contains('cart__dellink')) {
		event.preventDefault();
		cartItems.splice([+event.target.dataset.num], 1);
		sessionStorage.setItem("key", JSON.stringify(cartItems));
		buildCart();
	}
}

function handleClearCartBtnClick(event) {
	cartItems = [];
	sessionStorage.setItem("key", JSON.stringify(cartItems));
	buildCart();
}

function handleCheckout_btnClick(event) {
	if ($checkout_btn.classList.contains('disabled') !== true) {
		event.preventDefault();
		var $cart__tbl = document.querySelector('.cart__tbl');
		$cart__tbl.style.display = 'none';
		
		var $checkout = document.querySelector('#checkout');
		$checkout.style.display = 'block'
	}
}

function handleBtn_nextClick(event) {
	if (event.target.classList.contains('btn_next')) {
		event.preventDefault();
		event.target.closest('details').removeAttribute('open');
		$checkout.children[+event.target.dataset.num + 1].setAttribute('open', 'open');
	}
}

buildCart();
$cartList.addEventListener('change', handleQuantityChange);
$cartList.addEventListener('click', handleDeleteBtnClick);
$clearCartBtn.addEventListener('click', handleClearCartBtnClick);
$checkout_btn.addEventListener('click', handleCheckout_btnClick);
$checkout.addEventListener('click', handleBtn_nextClick);
