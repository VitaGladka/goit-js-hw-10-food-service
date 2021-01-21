const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//Кнопка переключения темы и body для добавления классов
const toggleRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

//Слушатель события на переключатель темы
toggleRef.addEventListener('change', setTheme);

//Проверяем какая тема включена
checkTheme();

// Функция для первоочередной загрузки темы
function checkTheme() {
  if (localStorage.theme === 'dark-theme') {
    bodyRef.classList.add(Theme.DARK);
    toggleRef.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

//Функция для переключения темы
function setTheme(event) {
  console.log('event: ', event);
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);

  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

