//toggle navbar
const hambuger = document.getElementById('hambuger')
const mobileMenu = document.getElementById('mobileMenu')
const navBar = document.getElementById('navbar')
const active_class_name = 'active'

function onMenuClick() {
  hambuger.classList.toggle(active_class_name)
  if (document.getElementsByClassName('hambuger active'))
    navBar.classList.toggle('extendNav')
  mobileMenu.classList.toggle('open')
}
const closeNav = document.getElementsByClassName('nav--id')

function onClose() {
  hambuger.classList.remove(active_class_name)
  navBar.classList.remove('extendNav')
  mobileMenu.classList.remove('open')
}

//SWIPER INITIALIZATION
const swiper = new Swiper('.sectionOneSWiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2000,
  },
})

const steps = document.querySelectorAll('.sectionTwo_step')

steps.forEach(step => {
  step.addEventListener('click', e => {
    const currentStep = e.currentTarget
    if (currentStep.classList.contains('active-step')) return

    steps.forEach(step => {
      step.classList.remove('active-step')
      step.querySelector('.thickBar').classList.remove('activeThickBar')
      step
        .querySelector('.sectionTwo_step-mainText')
        .classList.remove('active-title')
      step.querySelector('.sectionTwo_step-subText').classList.remove('active')

      currentStep.classList.add('active-step')
      const barIndicator = currentStep.querySelector('.thickBar')
      const mainText = currentStep.querySelector('.sectionTwo_step-mainText')
      const subText = currentStep.querySelector('.sectionTwo_step-subText')
      barIndicator.classList.add('activeThickBar')
      mainText.classList.add('active-title')
      subText.classList.add('active')
    })
  })
})

// CHANGING SECTION TWO MOCKUP IMAGE
const stepOne = document.getElementById('stepOne')
const stepTwo = document.getElementById('stepTwo')
const stepThree = document.getElementById('stepThree')
const section_image = document.getElementById('sectionTwoImage')
stepOne.addEventListener('click', () => {
  section_image.setAttribute('src', '/images/iPhone-13.png')
})

stepTwo.addEventListener('click', () => {
  section_image.setAttribute('src', '/images/iphone2.png')
})
stepThree.addEventListener('click', () => {
  section_image.setAttribute('src', '/images/iphone3.png')
})

const sectionTwo = document.querySelector('.sectionTwo')
const sectionThree = document.querySelector('.sectionThree')
const s_Three = document.querySelector('.sectionTwo_step-three') //formerly stepThree

const sectionTwoPosition = sectionTwo.offsetTop
const sectionThreePosition = sectionThree.offsetTop

// MOBILE SCROLL SLIDER
var scrollSwiper = new Swiper('.mySwiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
})

// FAQ ACCORDION
const accordion = document.getElementsByClassName('accordion')
var i

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    /* Toggle between adding and removing the "active" class,to highlight the button that controls the panel */
    this.classList.toggle('activeFAQ')

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}
