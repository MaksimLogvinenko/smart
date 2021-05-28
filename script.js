function createCards() {
    const cards = [
        {
            description: 'Автоматический режим работы вентилятора',
            img: './images/svg/auto.svg'
        },
        {
            description: 'Осушение и очистка воздуха',
            img: './images/svg/osush.svg'
        },
        {
            description: 'Охлаждение / обогрев',
            img: './images/svg/heat-cool.svg'
        },
        {
            description: 'При низкой температуре (<-10 градусов)',
            img: './images/svg/low.svg'
        },
    ]
    const list = document.querySelector('.my-cards')
    for (let card in cards) {
        list.innerHTML += `
        
            <div class="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center mb-4" src="${cards[card].img}">
              <div class="w-4/5">
                <p class="mb-4">${cards[card].description}</p>
              </div>
            </div>
          </div>
                `
    }
}

createCards();

function stepCards() {
    const stepCards = [
        {
            title: 'Таймер',
            description: 'Возможность программирования включения и выключения кондиционера.',
            img: './images/svg/timer.svg'
        },
        {
            title: 'Часы на пульте',
            description: 'Индикация времени на пульте ДУ.',
            img: './images/svg/24.svg'
        },
        {
            title: 'Режим "турбо"',
            description: 'Режим для интенсивного охлаждения или обогрева.',
            img: './images/svg/turbo.svg'
        },
        {
            title: 'Работа в режиме "сон"',
            description: 'Обеспечивает максимальный комфорт и экономию электроэнергии.',
            img: './images/svg/son.svg'
        },
        {
            title: 'Широкий поток воздуха',
            description: 'Поток воздуха равномерно распределяется в помещении.',
            img: './images/svg/wide.svg'
        },
        {
            title: 'Многоскоростной вентилятор',
            description: 'Возможность выбора одной из скоростей вентилятора для обеспечения максимального комфорта.',
            img: './images/svg/4speed.svg'
        },
    ]
    const stepCardslist = document.querySelector('.step-cards')
    for (let stepCard in stepCards) {
        stepCardslist.innerHTML += `
        <div class="flex relative pb-12 last:p-0">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-14 h-14 bg-white rounded-full inline-flex items-center justify-center text-white relative z-10">
                <img src="${stepCards[stepCard].img}" alt="${stepCards[stepCard].title}">
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">${stepCards[stepCard].title}</h2>
                  <p class="leading-relaxed">${stepCards[stepCard].description}</p>
                </div>
              </div>
            
                `
    }
}

stepCards();

const mybutton = document.getElementById("scroll-to-top");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const openMenu = document.querySelector('#openMenu');
const showMenu = document.querySelector('#showMenu');
const closeMenu = document.querySelector('#closeMenu');
const link = document.querySelectorAll('#link');

function openNavMenu() {
    openMenu.addEventListener('click', (e) => {
        e.preventDefault()
        showMenu.style.transform = 'translateX(0)'
    })
    closeMenu.addEventListener('click', (e) => {
        e.preventDefault()
        showMenu.style.transform = 'translateX(100%)'
    })
}
openNavMenu()