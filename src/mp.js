const mp = document.createElement('div');
mp.classList.add('mp', 'ip--inactive');
const hotPocketPic = document.createElement('img');
hotPocketPic.classList.add('menu-photo', 'hot-pocket');
hotPocketPic.src = 'photos/hot-pocket.jpg';
const hotPocketTxt = document.createElement('span');
hotPocketTxt.classList.add('menu-text');
hotPocketTxt.innerHTML = '$5 Hot Pocket';
const potPiePic = document.createElement('img');
potPiePic.classList.add('menu-photo', 'pot-pie');
potPiePic.src = 'photos/pot-pie.jpg';
const potPieTxt = document.createElement('span');
potPieTxt.classList.add('menu-text');
potPieTxt.innerHTML = '$5 Chicken, Pot Pie';
const popcornPic = document.createElement('img');
popcornPic.classList.add('menu-photo', 'popcorn');
popcornPic.src = 'photos/popcorn.jpeg';
const popcornTxt = document.createElement('span');
popcornTxt.classList.add('menu-text');
popcornTxt.innerHTML = '$5 Popcorn';
const waterPic = document.createElement('img');
waterPic.classList.add('menu-photo', 'hot-water');
waterPic.src = 'photos/hot-water.jpg';
const waterTxt = document.createElement('span');
waterTxt.classList.add('menu-text');
waterTxt.innerHTML = '$1 Super-boiled Water';
mp.appendChild(hotPocketPic);
mp.appendChild(potPiePic);
mp.appendChild(hotPocketTxt);
mp.appendChild(potPieTxt);
mp.appendChild(popcornPic);
mp.appendChild(waterPic);
mp.appendChild(popcornTxt);
mp.appendChild(waterTxt);

export {mp}
