const btnAddContact = document.querySelector('.btn');
const wrappContacts = document.querySelector('.wrapp-contacts');
let countContacts = 0;


btnAddContact.addEventListener('click', (event) => {
    if (countContacts !== 10) {

        countContacts++;

        const boxContact = document.createElement('div');
        boxContact.classList.add('contact');
        boxContact.setAttribute('data-contact', `${countContacts}`);
        boxContact.innerHTML = `<div class="dropdown contact__wrapp-title" data-contact=${countContacts}>
        <ul class="dropdown__list" data-contact=${countContacts}>
            <li class="dropdown__item">Телефон</li>
            <li class="dropdown__item">Email</li>
            <li class="dropdown__item">Facebook</li>
            <li class="dropdown__item">VK</li>
            <li class="dropdown__item">Другое</li>
        </ul>
        <input class="contact__input contact__input-title" type="text" value="Телефон" disabled data-contact=${countContacts}>
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
        <span class="contact--icon"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#B0B0B0"/>
        </svg>
        
            </span>
    </div>`;

        wrappContacts.appendChild(boxContact);

        const btnRemove = document.querySelector(`[data-contact="${countContacts}"].contact__btn-remove`);

        btnRemove.addEventListener('click', (event) => {
            countContacts--;
            boxContact.remove();
        });

        const dropdown = boxContact.children[0];

        dropdown.addEventListener('click', (event) => {
            const dropdownItems = document.querySelectorAll('.open');
            dropdownItems.forEach((el) => {
                if (el.dataset.contact !== event.target.dataset.contact)
                    el.classList.remove('open');
            });
            const data = event.target.dataset.contact;

            const list = document.querySelector(`[data-contact="${data}"].dropdown__list`);
            list.classList.toggle('open')
        });

        const dropdownChildren = Array.from(dropdown.children[0].children);
        const title = document.querySelector(`[data-contact="${countContacts}"].contact__input-title`);


        dropdownChildren.forEach((el) => {
            el.addEventListener('click', (event) => {

                event.stopPropagation();

                const dropdownItems = document.querySelectorAll('.open');
                dropdownItems.forEach((e) => {
                    e.classList.remove('open');
                })

                if (el.textContent === 'Другое') {
                    title.disabled = false;
                    title.value = '';
                    title.focus();
                }
                else {
                    title.value = el.textContent;
                }
            });
        })



    }
});




