document.addEventListener("DOMContentLoaded", () => {
	let lastScrollTop = 0;
	const header = document.querySelector(".header-main");
	const scrollThreshold = 50; // Start behavior after 50px scroll

	window.addEventListener("scroll", function () {
		const currentScroll =
			window.pageYOffset || document.documentElement.scrollTop;

		// If we're at the very top
		if (currentScroll <= scrollThreshold) {
			header.classList.remove("nav-down");
			header.classList.remove("nav-up");
		}
		// Scrolling down
		else if (currentScroll > lastScrollTop) {
			header.classList.remove("nav-down");
			header.classList.add("nav-up");
		}
		// Scrolling up
		else {
			header.classList.remove("nav-up");
			header.classList.add("nav-down");
		}

		lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
	});

	/* Menu toggle */
	const menuBtn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu");

	if (menuBtn && menu) {
		menuBtn.addEventListener("click", () => {
			menu.classList.toggle("hidden");
		});
	}

	/* Toggle sub-menus */
	document.querySelectorAll(".toggle-dropdown").forEach((toggle) => {
		toggle.addEventListener("click", () => {
			const dropdown = toggle.nextElementSibling;
			const icon = toggle.querySelector("i");

			// Close other open dropdowns
			document.querySelectorAll(".toggle-dropdown").forEach((t) => {
				if (t !== toggle) {
					t.nextElementSibling.classList.add("hidden");
					t.querySelector("i").classList.remove("ri-subtract-line");
					t.querySelector("i").classList.add("ri-add-line");
				}
			});

			// Toggle current dropdown
			dropdown.classList.toggle("hidden");

			// Toggle icon (plus ↔ minus)
			icon.classList.toggle("ri-add-line");
			icon.classList.toggle("ri-subtract-line");
		});
	});
});

/* swiper-slider */

const swiper = new Swiper(".hotel-slider", {
	loop: true,
	speed: 800,
	spaceBetween: 30, // remove gap

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
		320: { slidesPerView: 1 },
		576: { slidesPerView: 2 },
		768: { slidesPerView: 3 },
	},
});

/* travel-discoveries-slider  hotel-slider-2 */

const swiper_2 = new Swiper(".hotel-slider-2", {
	loop: true,
	speed: 800,
	spaceBetween: 30, // remove gap

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
		320: { slidesPerView: 1 },
		576: { slidesPerView: 2 },
		768: { slidesPerView: 3 },
		1200: { slidesPerView: 4 },
	},
});

/* testimoonilas */

const swiper_3 = new Swiper(".hotel-slider-3", {
	loop: true,
	speed: 800,
	spaceBetween: 30, // remove gap

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},

	/* navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, */
	breakpoints: {
		320: { slidesPerView: 1 },
		576: { slidesPerView: 1 },
		768: { slidesPerView: 1 },
		1200: { slidesPerView: 1 },
	},
});
/* instagram slider */
const swiper_6 = new Swiper(".hotel-slider-6", {
  loop: true,
  speed: 800,
  spaceBetween: 20,
  autoplay: {
    delay: 800,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    425: { slidesPerView: 2 },
		576:{slidesPerView:3},
    768: { slidesPerView: 4},
		1024:{slidesPerView:5},
    1200: { slidesPerView: 6 },
  },
});


/* video */

const playButton = document.getElementById("playButton");
const videoModal = document.getElementById("videoModal");
const closeVideo = document.getElementById("closeVideo");
const youtubePlayer = document.getElementById("youtubePlayer");

// Replace this with your YouTube video ID
const YT_VIDEO_ID = "HC-tgFdIcB0";

playButton.addEventListener("click", () => {
	document.body.classList.add("overflow-hidden");
	videoModal.classList.remove("hidden");
	videoModal.classList.add("flex");
	// load YouTube video but do NOT autoplay
	youtubePlayer.src = `https://www.youtube.com/embed/${YT_VIDEO_ID}?autoplay=0&rel=0`;
});

closeVideo.addEventListener("click", () => {
	videoModal.classList.add("hidden");
	document.body.classList.remove("overflow-hidden");
	videoModal.classList.remove("flex");
	// stop the video
	youtubePlayer.src = "";
});
