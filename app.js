const slides = document.querySelectorAll('.slide');

var counter = 0;
// console.log(slide);

slides.forEach(
	(slide, index) => {
		slide.style.left = `${index * 100}%`;
	}
);

const slideshow = () => {
	slides.forEach(
		(slide) => {
			slide.style.transform = `translateX(-${counter * 100}%)`;
		}
	);
}
const nxt = () => {
	if (counter == slides.length - 1) {
		counter = 0;
		slideshow();
	}
	else {
		counter++;
		slideshow();
	}
}

const prev = () => {
	if (counter == 0) {
		counter = slides.length - 1;
		slideshow();
	} else {
		counter--;
		slideshow();
	}
}