const search = document.querySelector('.search');
const inputSearch = document.querySelector('.input-search');
const imgLupa = document.querySelector('.img-lupa');
const imgLogo = document.querySelector('.img-logo');
const menuLinks = document.querySelector('.links');

imgLogo.addEventListener('click', function(event) {
    event.preventDefault();
    imgLupa.classList = 'search-block';
    menuLinks.classList = 'display-links-on';
    btnProdutos.style.color = '';
    btnEstoque.style.color = '';
});

imgLogo.addEventListener('dblclick', function(event) {
    event.preventDefault();
    menuLinks.classList = 'display-links-off';
});

search.addEventListener('click', function(event) {
    event.preventDefault();
    imgLupa.classList = 'search-hidden';
    inputSearch.classList = 'search-all';
    menuLinks.classList = 'display-links-off';
    btnProdutos.style.color = '';
    btnEstoque.style.color = '';
})

//Evento ao clicar no botão produtos
const container1 = document.querySelector('.container1');
const btnProdutos = document.querySelector('.btn-produtos');
btnProdutos.addEventListener('click', function(event) {
    event.preventDefault();
    imgLupa.classList = 'search-block';
    menuLinks.classList = 'display-links-off';
    container1.classList = 'display-container';
    container2.classList = 'container2';
    btnProdutos.style.color = 'red';
    btnEstoque.style.color = '';
})

//Evento ao clicar no botão estoque
const container2 = document.querySelector('.container2');
const btnEstoque = document.querySelector('.btn-estoque');
btnEstoque.addEventListener('click', function(event) {
    event.preventDefault();
    imgLupa.classList = 'search-block';
    menuLinks.classList = 'display-links-off';
    container2.classList = 'display-container2';
    container1.classList = 'container1';
    btnProdutos.style.color = '';
    btnEstoque.style.color = 'red';
})
