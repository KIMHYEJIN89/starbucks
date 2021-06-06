const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        //배지 숨기기
      gsap.to(badgeEl,.6,{
        opacity:0,
        display:'none',
      });
      //버튼 보이기!
      //gsap.to(요소,지속시간,옵션);
      gsap.to(toTopEl, .2,{
        x:0
      });
    }else{
        // 배지 보이기
        gsap.to(badgeEl,.6,{
            opacity:1,
            display:'block',
          });

          //버튼 숨기기!
          gsap.to(toTopEl, .2,{
            x:100
          });
        }
 },300));//0.3초단위로 부하로 줘서 함수가 우르르 실행돼는것을 방지! (throttle 라이브러리)
// 스크롤 할 때 마다 몇십개씩 함수가 실행되다보니..무거워질수 있음.

//_.throttle(함수,시간)

toTopEl.addEventListener('click',function(){
  gsap.to(window, .7, {
    scrollTo : 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){//이름,반복되는 횟수

  //gsap.to(요소,지속시간,옵션);
  gsap.to(fadeEl,1,{
    delay:(index + 1)* .7, //index가 0부터 시작이여서 0.7, 1.4 ,2.1 ,2.7
    opacity:1
  });

});

// new Swiper(선택자,옵션)
 new Swiper('.notice-line .swiper-container', {
  // Optional parameters
  direction: 'vertical',
  autoplay:true,
  loop: true,
});

// new Swiper(선택자,옵션)
new Swiper('.promotion .swiper-container', {
  // Optional parameters
  slidesPerView:3,// 한번에 보여줄 슬라이드 수
  spaceBetween:10, // 슬라이드 사이 여백
  centeredSlides:true, // 1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay:{
    delay:5000
  },
  pagination:{
    el:'.promotion .swiper-pagination', //페이징 번호 요소 선택자
    clickable:true // 사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});


// new Swiper(선택자,옵션)
new Swiper('.awards .swiper-container', {
  // Optional parameters
  autoplay:true,
  loop: true,
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion =  !isHidePromotion;

  if(isHidePromotion){
    //숨김처리! 
    promotionEl.classList.add('hide');
  }else{
    //보임처리!
    promotionEl.classList.remove('hide');
  }

});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay,size){
  gsap.to(selector,//선택자
    random(1.5,2.5),{// 애니메이션 동작 시간
      y:size,
      repeat:-1, //무한 반복
      yoyo:true,
      ease:Power1.easeInOut,
      delay:random(0,delay)
  });

}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl){

  new ScrollMagic
    .Scene({
      triggerElement:spyEl, //보여짐 여부를 감시할 요소를
      triggerHook:.8
    })
    .setClassToggle(spyEl,'show')//show 클래스를 넣었다 뺐다!
    .addTo(new ScrollMagic.Controller())
});
