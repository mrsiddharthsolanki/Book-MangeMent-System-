document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    const searchBar = document.getElementById('searchBar');
    const bookEffect = document.querySelectorAll('book-item')
    


    bookForm.addEventListener('submit' , (e) => {
        e.preventDefault();

        const bookName = document.getElementById('bookName').value;
        const author = document.getElementById('author').value;
        const bookGenre = document.getElementById('bookGenre').value;

        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item', 'fade-in');

        bookItem.setAttribute('data-name', bookName.toLowerCase());

        bookItem.innerHTML = `
        <h2>${bookName}</h2>
        <p>${author}</p>
        <p>${bookGenre}</p>
        <button class="boxDelete">Remove Book</button>
        `;

        if(bookName === '' || author === '' || bookGenre === '') {
            alert('Please fill in all fields');
            return;
        };

        bookList.appendChild(bookItem);
        
        bookItem.querySelector('.boxDelete').addEventListener('click', () => {
            bookList.removeChild(bookItem);
        });
        
        bookItem.style = `
            width: 30%; padding: 20px; display: flex; justify-content: center; align-items: center; flex-direction: column; flex-wrap: wrap; gap: 20px; border: 2px solid #1c617c;
        `;

        bookItem.querySelector('h2').style = `
            font-size: 1.5rem; color: #1c617c;
        `;
        bookItem.querySelector('p').style = `
            font-size: 1rem; color: #1c617c;
        `;
        bookItem.querySelector('.boxDelete').style = `
            padding: 10px 20px; background-color: #1c617c; color: white; border: none; cursor: pointer;
        `
        bookForm.reset();
    })

    searchBook.addEventListener('input', () => {
        const query = searchBook.value.toLowerCase();
        document.querySelectorAll('.book-item').forEach(book => {
            const bookTitle = book.getAttribute('data-name');
            book.style.display = bookTitle.includes(query) ? 'block' : 'none';
        });
    });


    bookEffect.forEach((book, index) =>{
        setTimeout(() => {
            bookEffect.style.animation = "slideFade 0.6s ease forwards";

        }, index * 200)
    });
});