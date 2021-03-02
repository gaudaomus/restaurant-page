import {ap} from './ap'
import {mp} from './mp'
import {hp} from './hp'

//page creation
const main = document.querySelector('#content');

const header = document.createElement('div');
header.classList.add('header');

const mw = document.createElement('div');
mw.innerHTML = "The Microwave";
mw.classList.add('mw', 'hi');

const home = document.createElement('div');
home.innerHTML = "Home";
home.classList.add('home', 'hi', 'ho');

const menu = document.createElement('div');
menu.innerHTML = "Menu";
menu.classList.add('menu', 'hi', 'ho');

const about = document.createElement('div');
about.innerHTML = "About";
about.classList.add('about', 'hi', 'ho');

const info = document.createElement('div');
info.classList.add('info');

main.appendChild(header);
main.appendChild(info);
header.appendChild(mw);
header.appendChild(home);
header.appendChild(menu);
header.appendChild(about);
info.appendChild(hp);
info.appendChild(mp);
info.appendChild(ap);

//page navigation

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
