const btnClose = document.getElementById('btn-close');
const btnLoginRegister = document.getElementById('btnLoginRegister')
const card = document.querySelector('.card')
const login = document.getElementById('linkLogin')
const register = document.getElementById('linkRegister')

btnLoginRegister.addEventListener('click', () =>{
    card.classList.toggle('hidden')
});

btnClose.addEventListener('click', () =>{
    card.classList.add('hidden')
})

register.addEventListener('click', () => {
    document.querySelector('.register').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
})  
login.addEventListener('click', () => {
    document.querySelector('.register').style.display = 'block';
    document.querySelector('.login').style.display = 'none';
})  