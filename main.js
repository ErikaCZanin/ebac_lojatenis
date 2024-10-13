
$(document).ready(function() {
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle();
    });
    
    $('.botao-cadastro button').click(function() {
        $('.form-contato').slideToggle();
    });
    
    // Deixando selecionado o tamanho 
    document.querySelectorAll('.size-circle').forEach(function(element) {
        element.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
    
    // Captura todos os botões "Adicionar ao carrinho"
    const buttons = document.querySelectorAll('.adicionar-carrinho');
    const quantidadeElemento = document.getElementById('quantidade');
    let quantidade = 0;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sizesSelected = button.closest('.produto').querySelectorAll('.size-circle.selected');
            if (sizesSelected.length === 0) {
                alert('Por favor, selecione um tamanho antes de adicionar ao carrinho.');
                return;
            }
            
            quantidade++;
            quantidadeElemento.textContent = quantidade;
            $('.botoes-carrinho').slideDown(); 
        });
    });

    // Adiciona evento de clique ao botão "limpar"
    document.getElementById('limpar').addEventListener('click', () => {
        quantidade = 0;
        quantidadeElemento.textContent = quantidade; 
        $('.botoes-carrinho').slideUp(); 
    });
});
