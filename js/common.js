const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  
    searchInputEl.focus();

});

searchInputEl.addEventListener('focus',function(){
    
    searchEl.classList.add('focused');//추가할 클래스 이름 제이쿼리로 addClass개념?
    searchInputEl.setAttribute('placeholder','통합검색');//인풋 요소에 힌트 추가

});//포커스가 되면


searchInputEl.addEventListener('blur',function(){
    
    searchEl.classList.remove('focused');//추가할 클래스 이름 제이쿼리로 removeClass 개념
    searchInputEl.setAttribute('placeholder','');

});//블러(포커스 해제) 되면

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021