document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const header = document.querySelector('.header-main');
  const scrollThreshold = 50; // Start behavior after 50px scroll

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If we're at the very top
    if (currentScroll <= scrollThreshold) {
      header.classList.remove('nav-down');
      header.classList.remove('nav-up');
    }
    // Scrolling down
    else if (currentScroll > lastScrollTop) {
      header.classList.remove('nav-down');
      header.classList.add('nav-up');
    }
    // Scrolling up
    else {
      header.classList.remove('nav-up');
      header.classList.add('nav-down');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  /* Menu toggle */
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  /* Toggle sub-menus */
  document.querySelectorAll('.toggle-dropdown').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const dropdown = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');

      // Close other open dropdowns
      document.querySelectorAll('.toggle-dropdown').forEach((t) => {
        if (t !== toggle) {
          t.nextElementSibling.classList.add('hidden');
          t.querySelector('i').classList.remove('ri-subtract-line');
          t.querySelector('i').classList.add('ri-add-line');
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle('hidden');

      // Toggle icon (plus ↔ minus)
      icon.classList.toggle('ri-add-line');
      icon.classList.toggle('ri-subtract-line');
    });
  });
});




/* hotels-slider */

/* const slider = document.querySelector('.slider');
  const slides = slider.children.length;
  const slideWidth = 320; // 300px + margins
  const visibleSlides = Math.floor(window.innerWidth / slideWidth); // how many fit on screen
  let index = 0;

  function slideShow() {
    // Calculate max index before blank space
    const maxIndex = slides - visibleSlides;

    if (index < maxIndex) {
      index++;
    } else {
      index = 0; // go back to start (loop)
    }

    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    // Add smooth transition
    slider.style.transition = "transform 1.2s ease-in-out";
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  }
 */
 


  /* swiper-slider */

  const swiper = new Swiper('.hotel-slider', {
      loop: true,
      speed: 800,
      spaceBetween: 30, // remove gap
     
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints:{
        320:{slidesPerView:1},
576: {slidesPerView:2},
 768: { slidesPerView: 3 }, 
      }
      
    });

 
