const btnUser = document.querySelector('.btn-user');
const btnAdmin = document.querySelector('.btn-admin');
const inputHidden1 = document.querySelector('.input-hidden1');
const inputHidden2 = document.querySelector('.input-hidden2');

btnUser.addEventListener('click', function(event){
    event.preventDefault();
    
    inputHidden1.style.display = 'block';
    inputHidden2.style.display = 'none';
    inputHidden1.placeholder = 'ID-USER:  Thiago'; 
    inputEmail.placeholder = 'Email: thiagosantos@gmail.com';
    inputPassword.placeholder = 'Password: 1234567';
    inputHidden1.value = ''; 
    inputHidden2.value = ''; 
    inputEmail.value = '';
    inputPassword.value = '';
});

btnAdmin.addEventListener('click', function(event){
    event.preventDefault();

    inputHidden2.style.display = 'block';
    inputHidden1.style.display = 'none';
    inputHidden2.placeholder = 'CPF: 123.456.789-0';
    inputEmail.placeholder = 'Email: thiagosantos14@gmail.com';
    inputPassword.placeholder = 'Password: 1234567';
    inputHidden2.value = '';
    inputHidden1.value = '';
    inputEmail.value = '';
    inputPassword.value = '';
});

const MensError = document.querySelector('.mensagem-error');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const btnLogin = document.querySelector('.btn-login');
const btnsLoginUser = document.querySelector('.container-user-admin');

btnLogin.addEventListener('click', function(event){
    event.preventDefault();

    const inputEmailValue = inputEmail.value;
    const inputPasswordValue = inputPassword.value;
    const inputHidden1Value = inputHidden1.value;
    const inputHidden2Value = inputHidden2.value;
    console.log(inputHidden2Value);

    if (inputEmailValue === '' || inputPasswordValue === '') {
        MensError.textContent = 'Preencha Todos os campos!';
        MensError.classList = 'mens-error';
        inputEmail.classList = 'error-input';
        inputPassword.classList = 'error-input';
        inputHidden1.classList = 'error-input';
        inputHidden2.classList = 'error-input';

        setTimeout(() => {
            MensError.textContent = '';
            MensError.classList = '';
            inputEmail.classList = '';
            inputPassword.classList = '';
            inputHidden1.classList = '';
            inputHidden2.classList = '';
        }, 3000)
        return;
    }else if (inputEmailValue === 'thiagosantos14@gmail.com' && inputPasswordValue === '1234567' && inputHidden2Value === '123.456.789-0') {
        location.href = 'tela-adm.html';
    }else if (inputEmailValue === 'thiagosantos@gmail.com' && inputPasswordValue === '1234567' && inputHidden1Value === 'Thiago') {
        location.href = 'tela-user.html';
    }else {
        alert('Email ou senha inválido!');
    }k
});

const btnCadastro = document.querySelector('.btn-cadastro');
const containerCadastro = document.querySelector('.secao-cadastro');

btnCadastro.addEventListener('click', function(event){
    event.preventDefault();

    containerCadastro.classList = 'display-secao-cadastro';

    setTimeout(() => {
        containerCadastro.classList = 'secao-cadastro';
    }, 10000)
    return;
});