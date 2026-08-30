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

const music = new Audio('Assets/idoberg-cozy-lofi-beat-split-memmories-248205.mp3');

function done2() {
    document.getElementById('breakfast').style.display = 'none';
    alert("yum! Let's do something!")
    document.getElementById('activity-container').style.display = 'flex';
    music.play();
}

var beachImgs = [
    'Assets/beach-0.png',
    'Assets/beach-1.png',
    'Assets/beach-2.png',
    'Assets/beach-3.png'
];

var parkImgs = [
    'Assets/pixil-frame-0-1.png',
    'Assets/pixil-frame-1-1.png',
    'Assets/pixil-frame-2-1.png',
    'Assets/pixil-frame-3-1.png'
];

var readImgs = [
    'Assets/reading-0.png',
    'Assets/reading-1.png',
    'Assets/reading-2.png',
    'Assets/reading-3.png'
];

var t = 0;
var p = 0;
var r = 0;

var activityInterval;


// BEACH
function beachAnimate() {

    document.getElementById("activity").src = beachImgs[t];

    t++;

    if (t >= beachImgs.length) {
        clearInterval(activityInterval);
        t = 0;
    }
    // Removed duplicate check
}


// PARK
function parkAnimate() {

    document.getElementById("activity").src = parkImgs[p];

    p++;

    if (p >= parkImgs.length) {
        clearInterval(activityInterval);
        p = 0;
    }
    if (p >= parkImgs.length) {
        p = 0;
    }
}


// READING
function readAnimate() {

    document.getElementById("activity").src = readImgs[r];

    r++;

    if (r >= readImgs.length) {
        clearInterval(activityInterval);
        r = 0;
    }
    if (r >= readImgs.length) {
        r = 0;
    }
}


function updateActivity(option) {

    clearInterval(activityInterval);

    t = 0;
    p = 0;
    r = 0;

    if (option == 1) {

        // Show first beach image immediately
        document.getElementById("activity").src = beachImgs[0];

        // Start looping
        activityInterval = setInterval(beachAnimate, 400);

    } else if (option == 2) {

        // Show first park image immediately
        document.getElementById("activity").src = parkImgs[0];

        // Start looping
        activityInterval = setInterval(parkAnimate, 400);

    } else {

        // Show first reading image immediately
        document.getElementById("activity").src = readImgs[0];

        // Start looping
        activityInterval = setInterval(readAnimate, 400);
    }
}