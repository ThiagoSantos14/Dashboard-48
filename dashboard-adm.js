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
    btnVendas.style.color = '';
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
    btnVendas.style.color = '';
})

//Evento ao clicar no botão produtos
const container1 = document.querySelector('.container1');
const btnProdutos = document.querySelector('.btn-produtos');
btnProdutos.addEventListener('click', function(event) {
    event.preventDefault();
    imgLupa.classList = 'search-block';
    container1.classList = 'display-container';
    container2.classList = 'container2';
    container3.classList = 'container3';
    btnProdutos.style.color = 'red';
    btnEstoque.style.color = '';
    btnVendas.style.color = '';
    menuLinks.classList = 'display-links-off';
});

//Evento ao clicar no botão estoque
const container2 = document.querySelector('.container2');
const btnEstoque = document.querySelector('.btn-estoque');
btnEstoque.addEventListener('click', function(event) {
    event.preventDefault();
    imgLupa.classList = 'search-block';
    menuLinks.classList = 'display-links-off';
    container2.classList = 'display-container2';
    container1.classList = 'container1';
    container3.classList = 'container3';
    btnProdutos.style.color = '';
    btnEstoque.style.color = 'red';
    btnVendas.style.color = '';
});


//Evento ao clicar no botão vendas
const container3 = document.querySelector('.container3');
const btnVendas = document.querySelector('.btn-vendas');
btnVendas.addEventListener('click', function(event){
    event.preventDefault();
    imgLupa.classList = 'search-block';
    menuLinks.classList = 'display-links-off';
    container3.classList = 'display-container3';
    container1.classList = 'container1';
    container2.classList = 'container2';
    btnVendas.style.color = 'red';
    btnProdutos.style.color = '';
    btnEstoque.style.color = '';
});



