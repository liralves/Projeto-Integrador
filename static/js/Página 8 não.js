// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os cards de conta existentes
    const accountCards = document.querySelectorAll('.account-options .account');
    // Seleciona o card “Adicionar outra conta”
    const addAccountCard = document.querySelector('.account-options .add-account');
    // Função para lidar com a seleção de uma conta
    function handleAccountClick(card) {
    const name = card.querySelector('.account-info strong').textContent;
    const email = card.querySelector('.account-info p').textContent;
    alert(`Entrando com a conta ${name} (${email})...`);
    // Aqui você poderia redirecionar de verdade:
    // window.location.href = 'home.html';
    }
    // Adiciona listener a cada conta existente
    accountCards.forEach(card => {
    card.addEventListener('click', () => handleAccountClick(card));
    });
    // Quando clicar em “Adicionar outra conta”
    addAccountCard.addEventListener('click', () => {
    const name = prompt('Digite o nome da nova conta:');
    if (!name) {
    alert('Você precisa informar um nome para continuar.');
    return;
    }
    const email = prompt('Digite o e-mail da nova conta:');
    if (!email) {
    alert('Você precisa informar um e-mail para continuar.');
    return;
    }
    // Cria dinamicamente o novo card de conta
    const newCard = document.createElement('div');
    newCard.classList.add('account');
    newCard.innerHTML = `
    <img class="user-photo" src="default-user.png" alt="Foto do Usuário">
    
    <div class="account-info">
    <strong>${name}</strong>
    <p>${email}</p>
    </div>
    `;
    // Insere antes do botão de adicionar
    const container = document.querySelector('.account-options');
    container.insertBefore(newCard, addAccountCard);
    // Adiciona o listener de clique a esse novo card
    newCard.addEventListener('click', () => handleAccountClick(newCard));
    });
    });