const closeNavmenu = document.getElementById('closeNavmenu');
const navMenubar = document.getElementById('navMenubar');
const slashButton = document.getElementById('slashButton');
slashButton.onclick = () => navMenubar.classList.toggle('show');
closeNavmenu.onclick = () => navMenubar.classList.toggle('show');

const angleLeft = document.getElementById('angle_left');
const angleRight = document.getElementById('angle_right');
const imageHero = document.getElementsByClassName('hero_img');
const heroName = document.getElementById('hero_name');
const heroInf = document.getElementById('hero_inf');
let sliderPosition = 0;
angleLeft.onclick = () => slider(-1);
angleRight.onclick = () => slider(1);
document.onkeyup = slideWithKey;

function slideWithKey(e) {
    if (e.keyCode === 37) {
        slider(-1)
    }
    if (e.keyCode === 39) {
        slider(1);
    }
}

function slider(contador) {
    if (sliderPosition > 0 && contador < 0 || contador > 0 && sliderPosition < 2) {
        sliderPosition += contador;
    }
    for (let index = 0; index < imageHero.length; index++) {
        switch (sliderPosition) {
            case 0:
                imageHero[index].style.left = '0';
                heroName.innerHTML = `Discover innovative <br> ways to decorate`;
                heroInf.innerHTML = `we provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`;
                break;
            case 1:
                imageHero[index].style.left = '-100%';
                heroName.innerHTML = `We are available <br> all across globe`;
                heroInf.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest your using our store locator. Any questions? Don't hesisitate to contact us today.`;
                break;
            case 2:
                imageHero[index].style.left = '-200%';
                heroName.innerHTML = `Manufactured with <br> the best materials`;
                heroInf.innerHTML = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`;
                break;
        }
    }
}

