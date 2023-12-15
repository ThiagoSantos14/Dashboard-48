//Mascara para o input user e admin
function mascara(formatar, document) {
    const length = document.value.length;
    const saida = formatar.substring(0,1);
    const text = formatar.substring(length);
    
    if (text.substring(0,1) != saida) {
        document.value += text.substring(0,1);
    };
};

