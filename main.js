const btnAddContact = document.querySelector('.btn');
const wrappContacts = document.querySelector('.wrapp-contacts');
let countContacts = 0;


btnAddContact.addEventListener('click', (event) => {
    countContacts++;

    const boxContact = document.createElement('div');
    boxContact.classList.add('contact');
    boxContact.setAttribute('data-contact', `${countContacts}`);
    boxContact.innerHTML = `<div class="dropdown contact__wrapp-title">
    <input class="contact__input contact__input-title" type="text" value="телефон">
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.495029 0.690033C0.250029 0.935033 0.250029 1.33003 0.495029 1.57503L4.65003 5.73003C4.84503 5.92503 5.16003 5.92503 5.35503 5.73003L9.51003 1.57503C9.75503 1.33003 9.75503 0.935032 9.51003 0.690032C9.26503 0.445032 8.87003 0.445032 8.62503 0.690032L5.00003 4.31003L1.37503 0.685034C1.13503 0.445034 0.735029 0.445033 0.495029 0.690033Z"
            fill="#9873FF" />
    </svg>
</div>
<div class="contact__wrapp-value">
    <input class="contact__input contact__input-value" type="text" placeholder="Введите данные контакта">
</div>
<div class="contact__btn-remove" data-contact=${countContacts}>
    <span class="contact--icon"><svg width="16" height="16" viewBox="0 0 16 16"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.99998 4.66665C7.63331 4.66665 7.33331 4.96665 7.33331 5.33331V7.33331H5.33331C4.96665 7.33331 4.66665 7.63331 4.66665 7.99998C4.66665 8.36665 4.96665 8.66665 5.33331 8.66665H7.33331V10.6666C7.33331 11.0333 7.63331 11.3333 7.99998 11.3333C8.36665 11.3333 8.66665 11.0333 8.66665 10.6666V8.66665H10.6666C11.0333 8.66665 11.3333 8.36665 11.3333 7.99998C11.3333 7.63331 11.0333 7.33331 10.6666 7.33331H8.66665V5.33331C8.66665 4.96665 8.36665 4.66665 7.99998 4.66665ZM7.99998 1.33331C4.31998 1.33331 1.33331 4.31998 1.33331 7.99998C1.33331 11.68 4.31998 14.6666 7.99998 14.6666C11.68 14.6666 14.6666 11.68 14.6666 7.99998C14.6666 4.31998 11.68 1.33331 7.99998 1.33331ZM7.99998 13.3333C5.05998 13.3333 2.66665 10.94 2.66665 7.99998C2.66665 5.05998 5.05998 2.66665 7.99998 2.66665C10.94 2.66665 13.3333 5.05998 13.3333 7.99998C13.3333 10.94 10.94 13.3333 7.99998 13.3333Z"
                    fill="#9873FF" />
            </svg>
        </span>
</div>`;

    wrappContacts.appendChild(boxContact);

    const btnRemove = document.querySelector(`[data-contact="${countContacts}"].contact__btn-remove`);

    btnRemove.addEventListener('click', (event)=> {
        // console.log(boxContact.dataset.contact);
        // console.log(event.target.dataset.contact);
        boxContact.remove();
    });
    
});




