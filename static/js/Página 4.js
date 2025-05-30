// Seleciona os botões de filtro por categoria
const botoesFiltro = document.querySelectorAll('.filtro-btn');

botoesFiltro.forEach(botao => {
  botao.addEventListener('click', () => {
    // Remove classe ativa de todos os botões
    botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
    botao.classList.add('ativo');

    const categoria = botao.dataset.categoria;
    const produtos = document.querySelectorAll('.produto-card');

    produtos.forEach(produto => {
      if (categoria === 'todos' || produto.classList.contains(categoria)) {
        produto.style.display = 'flex';
      } else {
        produto.style.display = 'none';
      }
    });
  });
});

// Adiciona hover visual (suave) via classe
const cards = document.querySelectorAll('.produto-card');
cards.forEach(card => {
  card.addEventListener('mouseover', () => card.classList.add('hover'));
  card.addEventListener('mouseout', () => card.classList.remove('hover'));
});

// Botões de pedido - abre o WhatsApp com nome e preço do produto
const botoesPedir = document.querySelectorAll('.btn-pedir');
botoesPedir.forEach(botao => {
  botao.addEventListener('click', () => {
    const card = botao.closest('.produto-card');
    const nome = card.querySelector('.produto-nome').textContent;
    const preco = card.querySelector('.produto-preco').textContent;
    const msg = `Olá! Gostaria de pedir o *${nome}* que custa *${preco}*.`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
});

// -------------------- RECURSOS ADICIONADOS -------------------- //

// Favoritos com localStorage (ícone com classe .btn-favorito)
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || {};

function atualizarFavoritosUI() {
  document.querySelectorAll('.btn-favorito').forEach(btn => {
    const produtoId = btn.dataset.id;
    if (favoritos[produtoId]) {
      btn.classList.add('favoritado');
    } else {
      btn.classList.remove('favoritado');
    }
  });
}

// Clique no botão de favorito
const botoesFavorito = document.querySelectorAll('.btn-favorito');
botoesFavorito.forEach(btn => {
  btn.addEventListener('click', () => {
    const produtoId = btn.dataset.id;
    favoritos[produtoId] = !favoritos[produtoId];
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    atualizarFavoritosUI();
  });
});

atualizarFavoritosUI();

// Busca por nome
const campoBusca = document.querySelector('#campo-busca');
if (campoBusca) {
  campoBusca.addEventListener('input', () => {
    const termo = campoBusca.value.toLowerCase();
    document.querySelectorAll('.produto-card').forEach(card => {
      const nome = card.querySelector('.produto-nome').textContent.toLowerCase();
      card.style.display = nome.includes(termo) ? 'flex' : 'none';
    });
  });
}

// Modal de confirmação ao clicar em PEDIR (opcional)
function mostrarConfirmacao(nome) {
  const confirmacao = document.createElement('div');
  confirmacao.className = 'pedido-confirmado';
  confirmacao.textContent = `✅ Pedido de "${nome}" iniciado via WhatsApp!`;
  document.body.appendChild(confirmacao);
  setTimeout(() => confirmacao.remove(), 3000);
}

botoesPedir.forEach(botao => {
  botao.addEventListener('click', () => {
    const nome = botao.closest('.produto-card').querySelector('.produto-nome').textContent;
    mostrarConfirmacao(nome);
  });
});
