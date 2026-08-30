const startScreen = document.getElementById('TitleScreen');
const dressUpGame = document.getElementById('DressUp');

const tabPanels = {
  top: document.getElementById('top-options'),
  bottom: document.getElementById('bottom-options'),
  hair: document.getElementById('hair-options'),
  skin: document.getElementById('skin-options')
};

const tabButtons = {
  top: document.getElementById('top-option'),
  bottom: document.getElementById('bottom-option'),
  hair: document.getElementById('hair-option'),
  skin: document.getElementById('skin-option')
};

const headImage = document.getElementById('head');
const hairImage = document.getElementById('hair');
const shirtImage = document.getElementById('shirt');
const skirtImage = document.getElementById('skirt');

const breakfastHead = document.getElementById('breakfastHead');
const breakfastHair = document.getElementById('breakfastHair');
const breakfastShirt = document.getElementById('breakfastShirt');
const breakfastSkirt = document.getElementById('breakfastSkirt');

const outfitState = {
  skinSrc: 'Assets/darkBaseCharacter..png',
  hairSrc: 'Assets/brownHair.png',
  shirtSrc: 'Assets/shirt1.png',
  skirtSrc: 'Assets/pants.png'
};

function syncOutfitPreview() {
  if (headImage) headImage.src = outfitState.skinSrc;
  if (hairImage) hairImage.src = outfitState.hairSrc;
  if (shirtImage) shirtImage.src = outfitState.shirtSrc;
  if (skirtImage) skirtImage.src = outfitState.skirtSrc;

  if (breakfastHead) breakfastHead.src = outfitState.skinSrc;
  if (breakfastHair) breakfastHair.src = outfitState.hairSrc;
  if (breakfastShirt) breakfastShirt.src = outfitState.shirtSrc;
  if (breakfastSkirt) breakfastSkirt.src = outfitState.skirtSrc;
}

function hideTitle() {
  document.getElementById("window").style.display = 'flex';
  Animate()
  if (startScreen) startScreen.style.display = 'none';
  if (dressUpGame) dressUpGame.style.display = 'none';
}

function setVisibleTab(tabKey) {
  Object.entries(tabPanels).forEach(([key, panel]) => {
    if (panel) panel.style.display = key === tabKey ? 'flex' : 'none';
  });

  Object.entries(tabButtons).forEach(([key, button]) => {
    if (button) button.classList.toggle('selected', key === tabKey);
  });
}

const shirtImages = ['Assets/shirt1.png', 'Assets/shirt2.png', 'Assets/shirt3.png']

function updateShirt(option) {
    shirt.src = shirtImages[option -1];
}

const skirtImages = ['Assets/skirt.png', 'Assets/shirt2.png', 'Assets/shirt3.png']

function updateSkirt(option) {
    shirt.src = shirtImages[option -1];
}

function attachOptionHandlers() {
  document.getElementById('top1')?.addEventListener('click', () => {
    outfitState.shirtSrc = 'Assets/shirt1.png';
    syncOutfitPreview();
    let shirtSrc = Url('Assets/shirt1.png');
  });

  document.getElementById('top2')?.addEventListener('click', () => {
    outfitState.shirtSrc = 'Assets/shirt2.png';
    syncOutfitPreview();
    let shirtSrc = Url('Assets/shirt2.png');
  });

  document.getElementById('top3')?.addEventListener('click', () => {
    outfitState.shirtSrc = 'Assets/shirt3.png';
    syncOutfitPreview();
    let shirtSrc = Url('Assets/shirt3.png');
  });

  document.getElementById('bottom1')?.addEventListener('click', () => {
    outfitState.skirtSrc = 'Assets/pants.png';
    syncOutfitPreview();
    let skirtSrc = Url('Assets/pants.png');
  });

  document.getElementById('bottom2')?.addEventListener('click', () => {
    outfitState.skirtSrc = 'Assets/pants2.png';
    syncOutfitPreview();
    let skirtSrc = 'Assets/pants2.png';
  });

  document.getElementById('bottom3')?.addEventListener('click', () => {
    outfitState.skirtSrc = 'Assets/skirt.png';
    syncOutfitPreview();
    let skirtSrc = 'Assets/skirt.png';
  });

  document.getElementById('skin1')?.addEventListener('click', () => {
    outfitState.skinSrc = 'Assets/tanBaseCharacter..png';
    syncOutfitPreview();
    let skinSrc = 'Assets/tanBaseCharacter..png';
  });

  document.getElementById('skin2')?.addEventListener('click', () => {
    outfitState.skinSrc = 'Assets/lightBaseCharacter.png';
    syncOutfitPreview();
    let skinSrc = 'Assets/lightBaseCharacter.png';
  });

  document.getElementById('skin3')?.addEventListener('click', () => {
    outfitState.skinSrc = 'Assets/darkBaseCharacter..png';
    syncOutfitPreview();
    let skinSrc = 'Assets/darkBaseCharacter..png';
  });

  document.getElementById('hair1')?.addEventListener('click', () => {
    outfitState.hairSrc = 'Assets/blackHair.png';
    syncOutfitPreview();
    let hairSrc = 'Assets/blackHair.png';
  });

  document.getElementById('hair2')?.addEventListener('click', () => {
    outfitState.hairSrc = 'Assets/brownHair.png';
    syncOutfitPreview();
    let hairSrc = 'Assets/brownHair.png';
  });

  document.getElementById('hair3')?.addEventListener('click', () => {
    outfitState.hairSrc = 'Assets/pinkHair.png';
    syncOutfitPreview();
    let hairSrc = 'Assets/pinkHair.png';
  });
}

const foodOptions = ['Assets/toast.png', 'Assets/pizza.png', 'Assets/pancakes.png', 'Assets/onigiri.png', 'Assets/eggsBacon.png', 'Assets/croissant.png']

function attachTabHandlers() {
  document.getElementById('top-option')?.addEventListener('click', () => setVisibleTab('top'));
  document.getElementById('bottom-option')?.addEventListener('click', () => setVisibleTab('bottom'));
  document.getElementById('hair-option')?.addEventListener('click', () => setVisibleTab('hair'));
  document.getElementById('skin-option')?.addEventListener('click', () => setVisibleTab('skin'));
}

function updateFood(option) {
    food.src = foodOptions[option -1];
}

attachTabHandlers();
attachOptionHandlers();
syncOutfitPreview();
setVisibleTab('skin');

function done() {
    breakfastHead.src = outfitState.skinSrc;
    breakfastHair.src = outfitState.hairSrc;
    breakfastShirt.src = outfitState.shirtSrc;
    breakfastSkirt.src = outfitState.skirtSrc;

    dressUpGame.style.display = 'none';
    document.getElementById('breakfast').style.display = 'flex';

    alert("Time for Breakfast!");
}


var images = new Array()
images = ['Assets/pixil-frame-0.png','Assets/pixil-frame-1.png', 'Assets/pixil-frame-2.png', 'Assets/pixil-frame-3.png', 'Assets/pixil-frame-4.png', 'Assets/pixil-frame-5.png', 'Assets/pixil-frame-6.png', 'Assets/pixil-frame-7.png', 'Assets/pixil-frame-8.png'
];

setInterval("Animate()", 200);
var x = 0;

function Animate() {
    document.getElementById("img").src = images[x]
    x++;
    if (x==10){
        document.getElementById('window').style.display = 'none';
        dressUpGame.style.display = 'flex'
    }
}

function done2() {
    document.getElementById('breakfast').style.display = 'none';
    alert("yum! Let's do something!")
    document.getElementById('activity').style.display = 'flex';
}

var beachImgs = new Array()
beachImgs = ['Assets/beach-0.png', 'Assets/beach-1.png', 'Assets/beach-2.png', 'Assets/beach-3.png', 'Assets/beach-4.png']


setInterval("beachAnimate()", 400);
var t = 0;

function beachAnimate() {
    document.getElementById("activity").src = images[t]
    t++;
    if (t==6){
        document.getElementById('window').style.display = 'none';
        dressUpGame.style.display = 'flex'
    }
}


var parkImgs = new Array()
parkImgs = ['Assets/pixil-frame-0-1.png', 'Assets/pixil-frame-1-1.png', 'Assets/pixil-frame-2-1.png', 'Assets/pixil-frame-3-1.png', 'Assets/pixil-frame-4-1.png']

setInterval("beachAnimate()", 400);
var p = 0;

function parkAnimate() {
    document.getElementById("activity").src = images[p]
    p++;
    if (t==6){
        document.getElementById('window').style.display = 'none';
        dressUpGame.style.display = 'flex'
    }
}

function updateActivity(option){
    if (option==1){
        beachAnimate();
    } else if (option == 2){
        parkAnimate();
    } else{
        readAnimate();
    }
}