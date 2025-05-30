// Função para filtrar produtos por categoria
function filtrarCategoria(categoria) {
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach(produto => {
    if (categoria === 'Todos' || produto.dataset.categoria === categoria) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
}

// Adiciona evento aos botões de categoria
const botoesCategoria = document.querySelectorAll('.filtros button');

botoesCategoria.forEach(botao => {
  botao.addEventListener('click', (e) => {
      e.preventDefault();
      const categoria = botao.textContent;
      filtrarCategoria(categoria);

      // Atualiza classe ativa
      botoesCategoria.forEach(b => b.classList.remove('ativo'));
      botao.classList.add('ativo');
  });
});

// Função para rolar suavemente até seções
const linksMenu = document.querySelectorAll('nav a');

linksMenu.forEach(link => {
  link.addEventListener('click', function(e) {
      if (this.hash !== '') {
          e.preventDefault();
          const destino = document.querySelector(this.hash);
          destino.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

// Ação do botão de pedido
const botoesPedido = document.querySelectorAll('.btn-pedir');

botoesPedido.forEach(btn => {
  btn.addEventListener('click', () => {
      const nomeProduto = btn.closest('.produto').querySelector('h3').textContent;
      const mensagem = `Olá! Gostaria de fazer um pedido de: ${nomeProduto}`;
      const whatsappLink = `https://wa.me/5599999999999?text=${encodeURIComponent(mensagem)}`;
      window.open(whatsappLink, '_blank');
  });
});
