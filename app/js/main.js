function AddMenuItem(itemName, itemClass, desc, srcImg, price) {
  this.menuList = document.querySelector('.menu__list');
  this.img = document.createElement('img');
  this.img.setAttribute('src', srcImg);
  this.img.classList.add('menu__img');
  this.figcaption = document.createElement('figcaption');
  this.figcaption.classList.add('menu__desc');
  this.figcaptionText = document.createTextNode(desc);
  this.figcaption.appendChild(this.figcaptionText);
  this.figure = document.createElement('figure');
  this.figure.classList.add('menu__figure');
  this.menuName = document.createElement('h3');
  this.menuNameText = document.createTextNode(itemName);
  this.menuName.appendChild(this.menuNameText);
  this.menuName.classList.add('menu__name');
  this.menuBtn = document.createElement('button');
  this.menuBtn.classList.add('menu__btn');
  this.menuBtnText = document.createTextNode(`Купить - ${price} грн.`);
  this.menuBtn.appendChild(this.menuBtnText);
  this.menuItem = document.createElement('li');
  this.menuItem.classList.add('menu__item');
  this.menuItem.classList.add(itemClass);
  this.figure.appendChild(this.img);
  this.figure.appendChild(this.figcaption);
  this.menuItem.appendChild(this.figure);
  this.menuItem.appendChild(this.menuName);
  this.menuItem.appendChild(this.menuBtn);
  this.menuList.appendChild(this.menuItem);
}

let menuItemArr = [
  {
    itemName: 'gunkan',
    itemClass: 'sushi',
    desc: 'rice',
    srcImg: 'img/sushi/gunkan.jpg',
    price: '35'
  },
  {
    itemName: 'Рис с курицей',
    itemClass: 'rice',
    desc: 'rice',
    srcImg: 'img/rice/rice-chicken.jpg',
    price: '35'
  },
  {
    itemName: 'Рис со свининой',
    itemClass: 'rice',
    desc: 'rice',
    srcImg: 'img/rice/rice-pork.jpg',
    price: '35'
  },
  {
    itemName: 'Рис с морепродуктами',
    itemClass: 'rice',
    desc: 'rice',
    srcImg: 'img/rice/rice-seaproduct.jpg',
    price: '35'
  },
  {
    itemName: 'Удон с курицей',
    itemClass: 'udon',
    desc: 'rice',
    srcImg: 'img/udon/udon-chicken.jpg',
    price: '35'
  },
  {
    itemName: 'Удон со свининой',
    itemClass: 'udon',
    desc: 'rice',
    srcImg: 'img/udon/udon-pork.jpg',
    price: '35'
  },
  {
    itemName: 'Удон с морепродуктами',
    itemClass: 'udon',
    desc: 'rice',
    srcImg: 'img/udon/udon-seaproduct.jpg',
    price: '35'
  },
  {
    itemName: 'Удон с овощами',
    itemClass: 'udon',
    desc: 'rice',
    srcImg: 'img/udon/udon-vegetables.jpg',
    price: '35'
  },
  {
    itemName: 'Акита',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/akita.jpg',
    price: '35'
  },
  {
    itemName: 'Алабама',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/alabama.jpg',
    price: '35'
  },
  {
    itemName: 'аомори',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/aomori.jpg',
    price: '35'
  },
  {
    itemName: 'аризона',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/arizona.jpg',
    price: '35'
  },
  {
    itemName: 'бангкок',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/bangkok.jpg',
    price: '35'
  },
  {
    itemName: 'черный дракон',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/black-dragon.jpg',
    price: '35'
  },
  {
    itemName: 'калифорния',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/california.jpg',
    price: '35'
  },
  {
    itemName: 'калифорния блэк',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/california-black.jpg',
    price: '35'
  },
  {
    itemName: 'колорадо',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/colorado.jpg',
    price: '35'
  },
  {
    itemName: 'дакота',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/dakota.jpg',
    price: '35'
  },
  {
    itemName: 'флорида',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/florida.jpg',
    price: '35'
  },
  {
    itemName: 'зеленый дракон',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/green-dragon.jpg',
    price: '35'
  },
  {
    itemName: 'хиросима',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/hirosima.jpg',
    price: '35'
  },
  {
    itemName: 'хокаидо',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/hokaido.jpg',
    price: '35'
  },
  {
    itemName: 'иокогама',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/iokogama.jpg',
    price: '35'
  },
  {
    itemName: 'киото',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/kioto.jpg',
    price: '35'
  },
  {
    itemName: 'маки с угрем',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/maki-acne.jpg',
    price: '35'
  },
  {
    itemName: 'маки с авокадо',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/maki-avocado.jpg',
    price: '35'
  },
  {
    itemName: 'маки с огурцом',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/maki-cucumber.jpg',
    price: '35'
  },
  {
    itemName: 'маки с тунцом',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/maki-tuna.jpg',
    price: '35'
  },
  {
    itemName: 'мичиган',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/michigan.jpg',
    price: '35'
  },
  {
    itemName: 'мияко',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/miyako.png',
    price: '35'
  },
  {
    itemName: 'монтана',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/montana.png',
    price: '35'
  },
  {
    itemName: 'нагасаки',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/nagasaki.jpg',
    price: '35'
  },
  {
    itemName: 'невада',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/nevada.jpg',
    price: '35'
  },
  {
    itemName: 'нью йорк',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/new-york.jpg',
    price: '35'
  },
  {
    itemName: 'осака',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/osaka.jpg',
    price: '35'
  },
  {
    itemName: 'пекин',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/pekin.jpg',
    price: '35'
  },
  {
    itemName: 'филадельфия',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/philadelphia.png',
    price: '35'
  },
  {
    itemName: 'красный дракон',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/red-dragon.png',
    price: '35'
  },
  {
    itemName: 'сеул',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/seul.jpg',
    price: '35'
  },
  {
    itemName: 'сингапур',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/singapur.jpg',
    price: '35'
  },
  {
    itemName: 'техас',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/texas.png',
    price: '35'
  },
  {
    itemName: 'токио',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/tokio.jpg',
    price: '35'
  },
  {
    itemName: 'вегетарианский',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/vegetables.jpg',
    price: '35'
  },
  {
    itemName: 'вашингтон',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/washington.jpg',
    price: '35'
  },
  {
    itemName: 'юта',
    itemClass: 'roll',
    desc: 'rice',
    srcImg: 'img/roll/yuta.jpeg',
    price: '35'
  },
]

menuItemArr.forEach((item) => {
  let addMenuItem = new AddMenuItem(item.itemName, item.itemClass, item.desc, item.srcImg, item.price);
})




function Menu() {
  this.navList = document.querySelector('.nav__list');
  this.navItem = document.querySelectorAll('.nav__item');
  this.menuItem = document.querySelectorAll('.menu__item');
  this.navLink = document.querySelectorAll('.nav__link');

  // сброс классов
  this.reset_ = () => {
    // сброс классов навигации
    for(var j = 0; j < this.navLink.length; j++) {
      if(this.navLink[j].classList.contains('nav__link--active')) {
        this.navLink[j].classList.remove('nav__link--active')
      }
    }
    // сброс классов меню
    for(let i = 0; i < this.menuItem.length; i++) {
      if(this.menuItem[i].classList.contains('menu__item--active')) {
        this.menuItem[i].classList.remove('menu__item--active')
      }
    }
  }

  this.changeContent_ = event => {
    // проверка на нажатие на ссылку
    if(event.target.tagName === 'A') {
      // сброс статов
      this.reset_();
      // если ID нажатого блока совпадает с ID навигации, то применяется класс к выбранному блоку
      for(let i = 0; i < this.navItem.length; i++) {
        if(event.target.getAttribute('id') === this.navLink[i].getAttribute('id')) {
          this.navLink[i].classList.add('nav__link--active');
        }
      }
      // если название класса карточки меню совпадает с ID выбранного навигациооного элемента, то к данным карточкам применяется класс
      for(let j = 0; j <this.menuItem.length; j++) {
        if(this.menuItem[j].classList.contains(event.target.getAttribute('id'))) {
          this.menuItem[j].classList.add('menu__item--active');
        }
      }
    }
  }


  this.events_ = () => {
    this.navList.addEventListener('click', this.changeContent_);
  }

  this.init_ = () => {
    this.events_();
  }
  this.init_();
}

const menu = new Menu();
