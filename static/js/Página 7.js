// Aguarda o carregamento total da página
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const form = document.querySelector('form');
    // Seleciona os campos
    const usernameOrEmail = document.querySelector('input[name="username_or_email"]');
    const password = document.querySelector('input[name="senha"]');
    
    // Seleciona o link "Esqueceu a senha?"
    const forgotPasswordLink = document.querySelector('.forgot-password a');
    // Quando o formulário for enviado
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Validação básica
    if (usernameOrEmail.value.trim() === '' || password.value.trim() === '') {
    alert('Por favor, preencha todos os campos!');
    return;
    }
    // Simulação de login (exemplo: usuário = admin, senha = 1234)
    const fakeUser = 'admin';
    const fakePass = '1234';
    if (usernameOrEmail.value === fakeUser && password.value === fakePass) {
    alert('Login realizado com sucesso! 🎉');
    // Aqui você poderia redirecionar para a página principal:
    // window.location.href = "home.html";
    } else {
    alert('Usuário ou senha inválidos! ❌');
    }
    });
    // Quando clicar em "Esqueceu a senha?"
    forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o redirecionamento
    const userEmail = prompt('Digite seu e-mail para recuperação de senha:');
    if (userEmail) {
    alert(`Se existir uma conta com ${userEmail}, enviaremos instruções para redefinir a senha.
    📧`);
    } else {
    alert('Você precisa informar um e-mail para recuperar a senha!');
    }
    });
    });