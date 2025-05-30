document.addEventListener('DOMContentLoaded', function () {
    // --- FILTRO DE PRODUTOS POR CATEGORIA ---
    const filtroBotoes = document.querySelectorAll('.botao-filtro');
    const produtos = document.querySelectorAll('.produto');
  
    filtroBotoes.forEach(botao => {
      botao.addEventListener('click', () => {
        filtroBotoes.forEach(btn => btn.classList.remove('ativo'));
        botao.classList.add('ativo');
  
        const categoria = botao.textContent.trim().toLowerCase();
  
        produtos.forEach(produto => {
          if (categoria === 'todos') {
            produto.style.display = 'block';
          } else {
            produto.style.display = produto.classList.contains(categoria) ? 'block' : 'none';
          }
        });
      });
    });
  
    // --- BOTÃO PEDIR (envia para WhatsApp com nome do produto) ---
    const botoesPedir = document.querySelectorAll('.botao-pedir');
  
    botoesPedir.forEach(botao => {
      botao.addEventListener('click', () => {
        const produto = botao.closest('.produto');
        const nome = produto.querySelector('.nome-produto').textContent.trim();
        const mensagem = encodeURIComponent(`Olá! Gostaria de pedir: ${nome}`);
        window.open(`https://wa.me/5599999999999?text=${mensagem}`, '_blank');
      });
    });
  
    // --- ROLAGEM SUAVE DO MENU ---
    const linksMenu = document.querySelectorAll('nav a[href^="#"]');
  
    linksMenu.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
          destino.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    // --- ÍCONES DE REDES SOCIAIS ---
    const iconeWhatsapp = document.querySelector('.icone-whatsapp');
    const iconeInstagram = document.querySelector('.icone-instagram');
    const iconeFacebook = document.querySelector('.icone-facebook');
  
    iconeWhatsapp?.addEventListener('click', () => {
      window.open('https://wa.me/5599999999999', '_blank');
    });
  
    iconeInstagram?.addEventListener('click', () => {
      window.open('https://instagram.com/seu_usuario', '_blank');
    });
  
    iconeFacebook?.addEventListener('click', () => {
      window.open('https://facebook.com/seu_usuario', '_blank');
    });
  
    // --- SISTEMA DE FAVORITOS (Cupcake) ---
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const iconesCupcake = document.querySelectorAll('.produto .favorito');
  
    iconesCupcake.forEach(icone => {
      const produtoId = icone.dataset.id;
  
      if (favoritos.includes(produtoId)) {
        icone.src = 'img/cupcake-colorido.png';
      } else {
        icone.src = 'img/cupcake-transparente.png';
      }
  
      icone.addEventListener('click', () => {
        if (favoritos.includes(produtoId)) {
          favoritos = favoritos.filter(id => id !== produtoId);
          icone.src = 'img/cupcake-transparente.png';
        } else {
          favoritos.push(produtoId);
          icone.src = 'img/cupcake-colorido.png';
        }
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
      });
    });
  });
  