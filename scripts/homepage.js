const closeNavmenu = document.getElementById('closeNavmenu');
const navMenubar = document.getElementById('navMenubar');
const slashButton = document.getElementById('slashButton');
slashButton.onclick = () => {
    navMenubar.classList.toggle('show');
    container[0].style.background = 'rgba(0, 0, 0, 0.25)';
}
closeNavmenu.onclick = () => {
    navMenubar.classList.toggle('show');
    container[0].style.background = 'transparent';
}
const angleLeft = document.getElementById('angle_left');
const angleRight = document.getElementById('angle_right');
const imageHero = document.getElementsByClassName('hero_img');
const heroName = document.getElementById('hero_name');
const heroInf = document.getElementById('hero_inf');
const container = document.getElementsByClassName('container');
const imageHero1 = document.getElementById('hero_img1');
const imageHero2 = document.getElementById('hero_img2');
const imageHero3 = document.getElementById('hero_img3');

// Arreglo de datos
const arrayContent = [
    {
        imageHero: '-0%',
        heroName: `Discover innovative <br> ways to decorate`,
        heroInf: `we provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
    },

    {
        imageHero: '-100%',
        heroName: `We are available <br> all across globe`,
        heroInf: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest your using our store locator. Any questions? Don't hesisitate to contact us today.`,
    },

    {
        imageHero: '-200%',
        heroName: `Manufactured with <br> the best materials`,
        heroInf: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
    },

];

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
    // Aumenta la posicion del slider
    sliderPosition += contador;
    // Si el slider llega a un numero mayor que el tope regresa a la primera posicion
    if (sliderPosition === arrayContent.length) {
        sliderPosition = 0;
    }
    // Entonces si el slider vuelve a un numero menor que al inicio regresa a la ultima posicion
    else if (sliderPosition === -1) {
        sliderPosition = arrayContent.length - 1;
    }
    //Actualizo en cada posicion
    imageHero1.style.left = arrayContent[sliderPosition].imageHero;
    imageHero2.style.left = arrayContent[sliderPosition].imageHero;
    imageHero3.style.left = arrayContent[sliderPosition].imageHero;

    heroName.innerHTML = arrayContent[sliderPosition].heroName;
    heroInf.innerHTML = arrayContent[sliderPosition].heroInf;
}

