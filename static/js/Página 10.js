// script.js

// Espera até que toda a página carregue
document.addEventListener('DOMContentLoaded', function() {
  
    // Seleciona todos os botões "Faça seu pedido"
    const pedidoButtons = document.querySelectorAll('.btn-primary');
  
    // Adiciona evento de clique para cada botão
    pedidoButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Encontra a seção de catálogo (ou outra seção)
        const catalogSection = document.getElementById('catalogo');
  
        if (catalogSection) {
          // Rola até a seção suavemente
          catalogSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Caso não encontre a seção, mostra um alerta
          alert('A seção de pedidos ainda não está disponível!');
        }
      });
    });
  
  });