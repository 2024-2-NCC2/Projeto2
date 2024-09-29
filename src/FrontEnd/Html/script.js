document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
  });



const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        event.preventDefault(); 
    } else if (!validateEmail(email.value)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}




