import '../css/styles.css';

//Импорт шаблона и данных для разметки меню
import menu from '../data/menu.json';
import menuTemplate from '../templates/menuTemplate.hbs';
// import menuTemplate from "../templates/switcherTemplate.hbs";

//Список с элементами меню
const menuRef = document.querySelector('.js-menu');

//Получаем разметку из шаблонизатора и добавляем в DOM
const newCard = menuTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', newCard);
