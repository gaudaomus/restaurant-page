//page creation


//page navigation
const home = document.querySelector('.home');
const hp = document.querySelector('.hp');
const menu = document.querySelector('.menu');
const mp = document.querySelector('.mp');
const about = document.querySelector('.about');
const ap = document.querySelector('.ap');

home.addEventListener('click',function(){
  hp.classList.remove('ip--inactive');
  if (!mp.classList.contains('ip--inactive')) {
    mp.classList.add('ip--inactive');
  }
  if (!ap.classList.contains('ip--inactive')) {
    ap.classList.add('ip--inactive');
  }
});

menu.addEventListener('click',function(){
  mp.classList.remove('ip--inactive');
  if (!hp.classList.contains('ip--inactive')) {
    hp.classList.add('ip--inactive');
  }
  if (!ap.classList.contains('ip--inactive')) {
    ap.classList.add('ip--inactive');
  }
});

about.addEventListener('click',function(){
  ap.classList.remove('ip--inactive');
  if (!mp.classList.contains('ip--inactive')) {
    mp.classList.add('ip--inactive');
  }
  if (!hp.classList.contains('ip--inactive')) {
    hp.classList.add('ip--inactive');
  }
});
