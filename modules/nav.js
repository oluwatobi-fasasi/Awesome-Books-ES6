const listLink = document.getElementById('list-link');
const homeLink = document.getElementById('home-link');
const contactLink = document.getElementById('contact-link');
const listPage = document.getElementById('book-list');
const homePage = document.getElementById('add-book');
const contactPage = document.getElementById('contact');

const showBookList = () => {
  listPage.style.display = 'block';
  homeLink.style.color = 'black';
  listLink.style.color = 'blue';
  contactLink.style.color = 'black';
  homePage.style.display = 'none';
  contactPage.style.display = 'none';
};

const showAddBook = () => {
  listPage.style.display = 'none';
  homePage.style.display = 'flex';
  homeLink.style.color = 'blue';
  listLink.style.color = 'black';
  contactLink.style.color = 'black';
  contactPage.style.display = 'none';
};

const showContact = () => {
  listPage.style.display = 'none';
  homePage.style.display = 'none';
  contactPage.style.display = 'flex';
  homeLink.style.color = 'black';
  listLink.style.color = 'black';
  contactLink.style.color = 'blue';
};

export { showBookList, showAddBook, showContact };
