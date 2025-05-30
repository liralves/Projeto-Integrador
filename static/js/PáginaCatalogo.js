document.addEventListener('DOMContentLoaded', function () {
    atualizarEstadoInicial(); // Primeiro carrega o estado salvo
    configurarEventListeners(); // Depois adiciona os eventos
});

function configurarEventListeners() {
    document.querySelectorAll('.favorito').forEach(icon => {
        icon.addEventListener('click', function () {
            const produtoId = this.getAttribute('data-produto-id');
            if (!produtoId) return;

            const isFavorito = this.getAttribute('data-favorito') === 'true';
            const novoEstado = !isFavorito;

            // Atualiza visualmente
            this.src = novoEstado
                ? "/Bella Doceria/imagens/globais/ícones/cupcake colorido.png"
                : "/Bella Doceria/imagens/globais/ícones/cupcake transparente.png";

            this.setAttribute('data-favorito', novoEstado);

            // Atualiza no localStorage
            atualizarFavoritos(produtoId, novoEstado);
        });
    });
}

function atualizarEstadoInicial() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    document.querySelectorAll('.favorito').forEach(icon => {
        const produtoId = icon.getAttribute('data-produto-id');
        if (!produtoId) return;

        const isFavorito = favoritos.includes(produtoId);

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
