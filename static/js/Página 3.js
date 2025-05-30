document.addEventListener('DOMContentLoaded', function() {
    // Primeiro: atualiza o estado inicial baseado no localStorage
    atualizarEstadoInicial();
    
    // Depois: configura os event listeners
    configurarEventListeners();
});

function configurarEventListeners() {
    document.querySelectorAll('.favorito').forEach(icon => {
        icon.addEventListener('click', function() {
            const produtoId = this.getAttribute('data-produto-id');
            const isFavorito = this.getAttribute('data-favorito') === 'true';
            const novoEstado = !isFavorito;

            // Atualiza o ícone visualmente
            this.src = novoEstado 
                ? "/Bella Doceria/imagens/globais/ícones/cupcake colorido.png" 
                : "/Bella Doceria/imagens/globais/ícones/cupcake transparente.png";
            
            this.setAttribute('data-favorito', novoEstado);
            
            // Atualiza o localStorage
            atualizarFavoritos(produtoId, novoEstado);
        });
    });
}

function atualizarEstadoInicial() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    document.querySelectorAll('.favorito').forEach(icon => {
        const produtoId = icon.getAttribute('data-produto-id');
        const isFavorito = favoritos.includes(produtoId);
        
        // Define o estado inicial (transparente por padrão)
        icon.setAttribute('data-favorito', isFavorito);
        icon.src = isFavorito 
            ? "/Bella Doceria/imagens/globais/ícones/cupcake colorido.png" 
            : "/Bella Doceria/imagens/globais/ícones/cupcake transparente.png";
    });
}

function atualizarFavoritos(produtoId, favoritado) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    if (favoritado) {
        if (!favoritos.includes(produtoId)) {
            favoritos.push(produtoId);
        }
    } else {
        favoritos = favoritos.filter(id => id !== produtoId);
    }
    
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}