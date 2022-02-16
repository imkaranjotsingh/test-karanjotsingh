
const form = document.querySelector('#add-form');

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Udata').add({
        email: form.email.value,
        name: form.username.value,
        level: 0
    });
    form.email.value = '';
    form.username.value = '';
    level: '';
});