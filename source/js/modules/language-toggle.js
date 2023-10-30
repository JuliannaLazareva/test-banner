let languageButton = document.querySelector('.page-header__language-button');
let initlanguageButton = languageButton.onclick = function () {
  languageButton.classList.toggle('page-header__language-button--ru');
  languageButton.classList.toggle('page-header__language-button--en');

  if (window.innerWidth > '767') {
    languageButton.innerHTML =
    (languageButton.innerHTML === 'en') ? languageButton.innerHTML = 'ru' : languageButton.innerHTML = 'en';
  } else {
    languageButton.innerHTML = '';
  }
};

export {initlanguageButton};
