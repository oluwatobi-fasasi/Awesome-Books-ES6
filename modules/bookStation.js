import { showBookList, showAddBook, showContact } from './nav.js';

class BookStation {
  constructor() {
    this.bookStation = JSON.parse(localStorage.getItem('bookStation')) || [];
    this.card = document.getElementById('book-wrapper');
    this.submitButton = document.getElementById('submit-form');
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
    this.listLink = document.getElementById('list-link');
    this.homeLink = document.getElementById('home-link');
    this.contactLink = document.getElementById('contact-link');
    this.renderBook();
  }

  add(title, author) {
    this.bookStation.push({ title, author });
    localStorage.setItem('bookStation', JSON.stringify(this.bookStation));
  }

  remove(title, author) {
    this.bookStation = this.bookStation.filter((b) => b.title !== title || b.author !== author);
    localStorage.setItem('bookStation', JSON.stringify(this.bookStation));
  }

  renderBook() {
    this.card.innerHTML = '';
    for (let i = 0; i < this.bookStation.length; i += 1) {
      const book = this.bookStation[i];
      const wrapper = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = `"${book.title}" by ${book.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';

      wrapper.appendChild(paragraph);
      wrapper.appendChild(removeBtn);

      this.card.appendChild(wrapper);

      removeBtn.addEventListener('click', () => {
        this.remove(book.title, book.author);
        this.renderBook();
      });
    }
  }

  init() {
    this.submitButton.addEventListener('submit', (e) => {
      e.preventDefault();
      this.add(this.title.value.trim(), this.author.value.trim());
      this.renderBook();
      this.submitButton.reset();
    });

    this.listLink.addEventListener('click', showBookList);

    this.homeLink.addEventListener('click', showAddBook);

    this.contactLink.addEventListener('click', showContact);
  }
}
export default BookStation;