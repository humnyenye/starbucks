const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 통합검색 포커스시 클래스를 추가해주고 플레이스 홀더를 변경함
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.removeAttribute('placeholder', '통합검색');
})

// 스크롤 할 때 뱃지 영역을 사라지게하기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#toTop');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    //gsap.to(요소, 시간, 옵션);
    //gsap은 숫자로 속성을 입력하는 요소들은 자연스러운 전환효과를
    //보여줄 수 있지만, display같은 중간값이 없기때문에 자연스러운 효과를 연출하지 못한다.
    gsap.to(badgeEl, 0.5, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  }else{
    gsap.to(badgeEl, 0.5, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click',function(){
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
})

const fadeEls = document.querySelectorAll('.visual .fadeIn');
//forEach로 반복처리 froEach(fucntion(임의의요소, 인덱스){})
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    //요소를 0.7s씩 텀을 두고 진행하게 하려면 delay에 index값으로 조절
    delay: (index+1) * 0.7,
    opacity: 1
  });
});

//스와이퍼 사용법
new Swiper('.noticeLine .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true
});

new Swiper('.promotion .swiper',{
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay:{
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
})

new Swiper('.awards .swiper',{
  autoplay:true,
  loopt:true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.togglePromotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
})

function random(min,max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObj(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObj('.floating1', 1, 15);
floatingObj('.floating2', 0.5, 15);
floatingObj('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scrollSpy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      tirggerHook: 0.8,
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector('.thisYear');
thisYear.textContent = new Date().getFullYear();