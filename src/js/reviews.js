import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  on: {
    init: function () {
      // Проверка состояния слайдера при инициализации
      if (this.isBeginning) {
        document.querySelector('.swiper-button-prev').classList.add('button-disabled');
        document.querySelector('.swiper-button-next').classList.remove('button-disabled');
      }
    },
    fromEdge: function () {
      document.querySelector('.swiper-button-next').classList.remove('button-disabled');
      document.querySelector('.swiper-button-prev').classList.remove('button-disabled');
    },
    reachEnd: function () {
        document.querySelector('.swiper-button-next').classList.add('button-disabled');
    },
    reachBeginning: function () {
        document.querySelector('.swiper-button-prev').classList.add('button-disabled');
    },
  },
});

async function fetchReviews () {
  try {
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');

    if (!response.status === 200) {
      throw new Error("Network response was not ok");
    }
    return response.data
  } catch (error) {
    document.getElementById('not-found').style.display = 'block';
    console.log('Error fetching reviews: ' + error.message);
  }
};

export async function parseReviews (params) {
  const reviews = await fetchReviews();
  const reviewsList = document.getElementById('reviews-list');
  const markup = reviews.reduce((string, review) => {
    return `${string}
      <div class="swiper-slide">
        <p class="review-text">${review.review}</p>
        <div class="review-autor">
          <img class="review-autor__photo" alt="autor" src="${review.avatar_url}"></img>
          <p class="review-autor__name">${review.author}</p>
        </div>
      </div>`
  }, '')
  reviewsList.insertAdjacentHTML('beforeend', markup);
  swiper.update();

  document.querySelector('.swiper').addEventListener('keydown', event => {
    if (event.code === 'ArrowLeft') {
      console.log('Keydown code: ' + event.code)
      swiper.slidePrev()
    }
    if (event.code === 'ArrowRight') {
      console.log('Keydown code: ' + event.code)
      swiper.slideNext()
    }
  })
  //я не знаю, почему встроенное в Swiper управление кнопками не работает,
  //всё настроено правильно. Придётся добавить свои обработчики событий.
  document.querySelector('.swiper-button-prev').addEventListener('click', event => swiper.slidePrev())
  document.querySelector('.swiper-button-next').addEventListener('click', event => swiper.slideNext())
}