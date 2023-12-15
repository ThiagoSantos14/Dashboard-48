const btnSair = document.querySelector('.btn-sair');

btnSair.addEventListener('click', function(event){
    event.preventDefault();

    location.href = 'index.html';
});