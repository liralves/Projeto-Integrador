// Espera o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Pega os campos
        const nome = form.querySelector('input[name="nome"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const assunto = form.querySelector('input[name="assunto"]').value.trim();
        const mensagem = form.querySelector('textarea[name="mensagem"]').value.trim();
        
        // Verificação simples
        if (nome === '' || email === '' || assunto === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }
        
        // Se tudo preenchido
        alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
        
        // Limpa o formulário
        form.reset();
    });

    // Redirecionamento dos ícones sociais
    const whatsappIcon = document.getElementById('whatsapp-icon');
    const instagramIcon = document.getElementById('instagram-icon');
    const facebookIcon = document.getElementById('facebook-icon');

    if (whatsappIcon) {
        whatsappIcon.addEventListener('click', function() {
            window.open('https://wa.me/seunumeroaqui', '_blank');
        });
    }

    if (instagramIcon) {
        instagramIcon.addEventListener('click', function() {
            window.open('https://instagram.com/seuusuarioaqui', '_blank');
        });
    }

    if (facebookIcon) {
        facebookIcon.addEventListener('click', function() {
            window.open('https://facebook.com/seupaginaaqui', '_blank');
        });
    }
});