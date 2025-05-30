document.addEventListener('DOMContentLoaded', function () {
    // Captura do formulário
    const form = document.querySelector('form');
    const loginLink = document.querySelector('.login-link');
    const googleBtn = document.querySelector('.google-login');
    const facebookBtn = document.querySelector('.facebook-login');
  
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const username = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const password = form.querySelector('input[type="password"]').value;
  
        if (!username || !email || !password) {
          alert('Por favor, preencha todos os campos.');
          return;
        }
  
        alert(`Conta criada com sucesso!\nBem-vindo, ${username}!`);
        form.reset();
      });
    }
  
    // Link para login
    if (loginLink) {
      loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'login.html'; // ajuste o caminho conforme sua estrutura
      });
    }
  
    // Botões de login social (Google e Facebook)
    if (googleBtn) {
      googleBtn.addEventListener('click', function () {
        alert('Login com Google ainda não está disponível.');
      });
    }
  
    if (facebookBtn) {
      facebookBtn.addEventListener('click', function () {
        alert('Login com Facebook ainda não está disponível.');
      });
    }
  
    // Ícones de redes sociais no rodapé
    const whatsappIcon = document.querySelector('.whatsapp-link');
    const instagramIcon = document.querySelector('.instagram-link');
    const facebookIcon = document.querySelector('.facebook-link');
  
    if (whatsappIcon) {
      whatsappIcon.addEventListener('click', function () {
        window.open('https://wa.me/5599999999999', '_blank');
      });
    }
  
    if (instagramIcon) {
      instagramIcon.addEventListener('click', function () {
        window.open('https://instagram.com/belladoceria', '_blank');
      });
    }
  
    if (facebookIcon) {
      facebookIcon.addEventListener('click', function () {
        window.open('https://facebook.com/belladoceria', '_blank');
      });
    }
  
    // Menu superior
    const menuSuperior = {
      inicio: 'index.html',
      catalogo: 'catalogo.html',
      minhaConta: 'minha-conta.html',
      sobre: 'sobre.html',
      contato: 'contato.html',
      favoritos: 'favoritos.html'
    };
  
    Object.entries(menuSuperior).forEach(([classe, destino]) => {
      const elemento = document.querySelector(`.menu-${classe}`);
      if (elemento) {
        elemento.addEventListener('click', function () {
          window.location.href = destino;
        });
      }
    });
  
    // Menu inferior (rodapé)
    const menuRodape = {
      inicio: 'index.html',
      catalogo: 'catalogo.html',
      minhaConta: 'minha-conta.html',
      sobre: 'sobre.html',
      contato: 'contato.html',
      termos: 'termos.html',
      aviso: 'aviso-legal.html',
      privacidade: 'privacidade.html'
    };
  
    Object.entries(menuRodape).forEach(([classe, destino]) => {
      const elemento = document.querySelector(`.rodape-${classe}`);
      if (elemento) {
        elemento.addEventListener('click', function () {
          window.location.href = destino;
        });
      }
    });
  });
  