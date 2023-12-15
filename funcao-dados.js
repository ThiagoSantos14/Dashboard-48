const btnDados = document.querySelector('.btn-dados');
const container01 = document.querySelector('.container1');
const container02 = document.querySelector('.container2');
const container03 = document.querySelector('.container3');


btnDados.addEventListener('click', function(event) {
    event.preventDefault();

    container01.classList = 'container1';
    container02.classList = 'container2';
    container03.classList = 'display-container3';
});