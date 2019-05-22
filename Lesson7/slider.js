var $catalog = document.querySelector('#catalog');
$catalog.addEventListener('click', handleImageClick);

var $overlay = document.querySelector('#overlay');
$overlay.addEventListener('click', handleCloseClick);

var $cross = document.querySelector('#cross');
$cross.addEventListener('click', handleCloseClick);

var $slide = document.querySelector('#slide');

var $slider = document.querySelector('#slider');
$slider.addEventListener('click', handleLinkClick);

var $thmb = document.querySelector('#thmb');
$thmb.addEventListener('click', handleThmbClick);

var $title = document.querySelector('#title');

function handleImageClick(event) {
	if (event.target.classList.contains('product__img')) {
		event.preventDefault();
		$thmb.innerHTML = '';
		$slide.innerHTML = '';
		var slideTitle = event.target.dataset.title;
		var slidesSrc = event.target.dataset.slides.split(' ');
		var thmbSrc = event.target.dataset.thmb.split(' ');
		var $overlay = document.querySelector('#overlay');
		$overlay.classList.add('visible');
		$slider.classList.add('visible');
		$slider.dataset.slidesSrc = event.target.dataset.slides;
		$slider.dataset.thmbSrc = event.target.dataset.thmb;
		$slide.src = slidesSrc[0];
		$slide.dataset.num = '0';
		$title.textContent = event.target.dataset.title;
		
		for (var i = 0; i < thmbSrc.length; i++) {
			var $thumbnail = document.createElement('img');
			$thumbnail.classList.add('thumbnail');
			$thumbnail.src = thmbSrc[i];
			$thumbnail.dataset.slidesSrc = slidesSrc[i];
			$thumbnail.dataset.num = i;
			$thmb.appendChild($thumbnail);
			if (i === 0) {
				$thumbnail.classList.add('outline');
			}
		}
	}
}

function handleCloseClick(event) {
	$slider.classList.remove('visible');
	$overlay.classList.remove('visible');
}

function handleThmbClick(event) {
	if (event.target.classList.contains('thumbnail')) {
		var $thumbnails = document.querySelectorAll('.thumbnail');
		$slide.src = event.target.dataset.slidesSrc;
		$slide.dataset.num = event.target.dataset.num;
		for (var i = 0; i < $thumbnails.length; i++) {
			$thumbnails[i].classList.remove('outline');
		}
		event.target.classList.add('outline');
	}
}

function handleLinkClick(event) {
	var slidesSrc = $slider.dataset.slidesSrc.split(' ');
	var $thumbnails = document.querySelectorAll('.thumbnail');
	if (event.target.className === 'prev' || event.target.className === 'next' || event.code == 'ArrowLeft' || event.code === 'ArrowRight') {
		event.preventDefault();
		for (var i = 0; i < $thumbnails.length; i++) {
			$thumbnails[i].classList.remove('outline');
		}
		if ((event.target.className === 'prev' && $slide.dataset.num == 0) || (event.code == 'ArrowLeft' && $slide.dataset.num == 0)) {
			$slide.src = slidesSrc[slidesSrc.length - 1];
			$slide.dataset.num = slidesSrc.length - 1;
			$thumbnails[slidesSrc.length - 1].classList.add('outline');
			return;
		} else if ((event.target.className === 'next' && $slide.dataset.num == slidesSrc.length - 1) || (event.code === 'ArrowRight' && $slide.dataset.num == slidesSrc.length - 1)) {
			$slide.src = slidesSrc[0];
			$slide.dataset.num = 0;
			$thumbnails[0].classList.add('outline');
			return;
		} else if (event.target.className === 'prev' || event.code == 'ArrowLeft') {
			$slide.src = slidesSrc[$slide.dataset.num - 1];
			$slide.dataset.num = ($slide.dataset.num - 1);
			$thumbnails[$slide.dataset.num].classList.add('outline');
			return;
		} else if (event.target.className === 'next' || event.code === 'ArrowRight') {
			$slide.src = slidesSrc[+$slide.dataset.num + 1];
			$slide.dataset.num = (+$slide.dataset.num + 1);
			$thumbnails[$slide.dataset.num].classList.add('outline');
			return;
		}
	}
}

window.addEventListener('keyup', handleCloseBtn);
window.addEventListener('keyup', handleLinkClick);

function handleCloseBtn(event) {
	if (event.code == 'Escape') {
		$slider.classList.remove('visible');
		$overlay.classList.remove('visible');
		event.preventDefault();
	}
}