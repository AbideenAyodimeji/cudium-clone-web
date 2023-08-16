// toggle navbar
const navToggle = document.querySelector('.nav-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
const active = document.querySelectorAll('.active')

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show-mobile-menu')

  active.forEach(item => {
    // if (mobileMenu.classList.contains('show-mobile-menu')) {
    //   item.classList.add('apply-active')
    // } else {
    //   item.classList.remove('apply-active')
    // }

    if (mobileMenu.classList.contains('show-mobile-menu')) {
      mobileMenu.classList.add('position-fixed')
    }
  })

  // const mainCenter = (document.getElementById('main-center').style.marginTop =
  //   '12vh')
})

// section-center swiper
const swiper = new Swiper('.sectionOneSwiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2000,
  },
})

// sectionTwo swiper
const scrollSwiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
})
