const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const buttons = {
	disable() {
		prev.disabled = true;
		next.disabled = true;
	},
	enable() {
		prev.disabled = false;
		next.disabled = false;
	}
}

const moveSlide = (slide) => {
	return {
		forwards() {
			slide.style.transform = 'translateX(-100%)'

		},
		activate() {
			slide.style.transform = 'translateX(0)';
		},

		backwards() {
			slide.style.transform = 'translateX(100%)'
		}
	}
}

const transitioner = () => {
	const activeSlide = document.querySelector(".active");
	const transitionTime = 300;

	return {
		next() {
			const nextSlide = activeSlide.nextElementSibling;

			moveSlide(activeSlide).forwards()
			moveSlide(nextSlide).activate()

			buttons.disable();

			setTimeout(() => {
				activeSlide.classList.remove('active');
				nextSlide.classList.add('active');

				moveSlide(activeSlide).backwards();
				buttons.enable();

				if (!nextSlide.nextElementSibling) {
					next.disabled = true;
				}

			}, transitionTime);
		}
	}
}

next.addEventListener("click", e => {
	const transitionSlides = transitioner();
	transitionSlides.next();
});