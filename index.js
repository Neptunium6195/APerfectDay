const startScreen = document.getElementById('TitleScreen');
const title = document.getElementById('title');
const dressUpGame = document.getElementById('DressUp');
const topTab = document.getElementById('top-options');
const bottomTab = document.getElementById('bottom-options');
const hairTab = document.getElementById('hair-options');
const skinTab = document.getElementById('skin-options');

function hideTitle() {
    startScreen.style.display = 'none';
    dressUpGame.style.display = 'flex';
}

function showTops() {
    topTab.style.display = 'flex';
    bottomTab.style.display = 'none';
    hairTab.style.display = 'none';
    skinTab.style.display = 'none';
}

function showBottoms() {
    topTab.style.display = 'none';
    bottomTab.style.display = 'flex';
    hairTab.style.display = 'none';
    skinTab.style.display = 'none'

}

function showHair() {
    topTab.style.display = 'none';
    bottomTab.style.display = 'none';
    hairTab.style.display = 'flex';
    skinTab.style.display = 'none'

}

function showSkin() {
    topTab.style.display = 'none';
    bottomTab.style.display = 'none';
    hairTab.style.display = 'none';
    skinTab.style.display = 'flex'
}