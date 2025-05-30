document.addEventListener('DOMContentLoaded', function () {
    // Get favorites from localStorage or initialize empty array
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const container = document.getElementById('container-favoritos');

    // Show message if no favorites
    if (favoritos.length === 0) {
        container.innerHTML = "<p>Nenhum produto favoritado ainda.</p>";
        return;
    }

    // Complete database of all products
    const todosProdutos = [
        { id: "p1", nome: "Sorvete de chocolate", imagem: "/Bella Doceria/imagens/produtos/Sorvete de chocolate.png", preco: "R$ 17,90" },
        { id: "p2", nome: "Coxinha de frango", imagem: "/Bella Doceria/imagens/produtos/Coxinha de frango 1.png", preco: "R$ 17,90" },
        { id: "p3", nome: "Sorvete de morango", imagem: "/Bella Doceria/imagens/produtos/Sorvete de morango.png", preco: "R$ 17,90" },
        { id: "p4", nome: "Sorvete de baunilha", imagem: "/Bella Doceria/imagens/produtos/Sorvete de baunilha 1.png", preco: "R$ 17,90" },
        { id: "p5", nome: "Torta salgada", imagem: "/Bella Doceria/imagens/produtos/Torta salgada.png", preco: "R$ 17,90" },
        { id: "p6", nome: "Brigadeiro", imagem: "/Bella Doceria/imagens/produtos/Brigadeiro 1.png", preco: "R$ 17,90" },
        { id: "p7", nome: "Bolo de maracujá", imagem: "/Bella Doceria/imagens/produtos/Bolo de maracujá.png", preco: "R$ 17,90" },
        { id: "p8", nome: "Pastel de frango", imagem: "/Bella Doceria/imagens/produtos/Pastel de frango.png", preco: "R$ 17,90" },
        { id: "p9", nome: "Torta de chocolate", imagem: "/Bella Doceria/imagens/produtos/Torta de chocolate com frutas.png", preco: "R$ 17,90" },
        { id: "p10", nome: "Torta de morango", imagem: "/Bella Doceria/imagens/produtos/Torta de morango.png", preco: "R$ 17,90" },
        { id: "p11", nome: "Bolo de cenoura", imagem: "/Bella Doceria/imagens/produtos/Bolo de cenoura.png", preco: "R$ 17,90" },
        { id: "p12", nome: "Sorvete de pistache", imagem: "/Bella Doceria/imagens/produtos/Sorvete de pistache 1.png", preco: "R$ 17,90" },
        
        // Bolos e Tortas
        { id: "p13", nome: "Bolo de chocolate", imagem: "/Bella Doceria/imagens/produtos/Bolo de chocolate.png", preco: "R$ 17,90" },
        { id: "p14", nome: "Bolo de morango", imagem: "/Bella Doceria/imagens/produtos/Bolo de morango.png", preco: "R$ 17,90" },
        { id: "p15", nome: "Bolo de banana", imagem: "/Bella Doceria/imagens/produtos/Bolo de banana.png", preco: "R$ 17,90" },
        { id: "p16", nome: "Torta de limão", imagem: "/Bella Doceria/imagens/produtos/Torta de limão.png", preco: "R$ 17,90" },
        { id: "p17", nome: "Bolo de laranja", imagem: "/Bella Doceria/imagens/produtos/Bolo de laranja.png", preco: "R$ 17,90" },
        { id: "p18", nome: "Torta de abacaxi", imagem: "/Bella Doceria/imagens/produtos/Torta de abacaxi.png", preco: "R$ 17,90" },
        { id: "p19", nome: "Torta de pistache", imagem: "/Bella Doceria/imagens/produtos/Torta de pistache.png", preco: "R$ 17,90" },
        { id: "p20", nome: "Bolo de abacaxi", imagem: "/Bella Doceria/imagens/produtos/Bolo de abacaxi.png", preco: "R$ 17,90" },
        { id: "p21", nome: "Torta de doce de leite", imagem: "/Bella Doceria/imagens/produtos/Torta de doce de leite.png", preco: "R$ 17,90" },
        
        // Salgados
        { id: "p22", nome: "Pastel de queijo", imagem: "/Bella Doceria/imagens/produtos/Pastel de queijo.png", preco: "R$ 17,90" },
        { id: "p23", nome: "Sanduíche", imagem: "/Bella Doceria/imagens/produtos/Sanduíche.png", preco: "R$ 17,90" },
        { id: "p24", nome: "Pão de queijo", imagem: "/Bella Doceria/imagens/produtos/Pão de queijo.png", preco: "R$ 17,90" },
        { id: "p25", nome: "Kibe", imagem: "/Bella Doceria/imagens/produtos/Kibe.png", preco: "R$ 17,90" },
        { id: "p26", nome: "Empada", imagem: "/Bella Doceria/imagens/produtos/Empada.png", preco: "R$ 17,90" },
        { id: "p27", nome: "Enroladinho", imagem: "/Bella Doceria/imagens/produtos/Enroladinho.png", preco: "R$ 17,90" },
        { id: "p28", nome: "Empadão de camarão", imagem: "/Bella Doceria/imagens/produtos/Empadão de camarão.png", preco: "R$ 17,90" },
        { id: "p29", nome: "Mini pizza", imagem: "/Bella Doceria/imagens/produtos/Mini pizza.png", preco: "R$ 17,90" },
        { id: "p30", nome: "Esfirra", imagem: "/Bella Doceria/imagens/produtos/Esfirra.png", preco: "R$ 17,90" },
        { id: "p31", nome: "Croissant", imagem: "/Bella Doceria/imagens/produtos/Croissant.png", preco: "R$ 17,90" },
        
        // Doces
        { id: "p32", nome: "Surpresa de uva", imagem: "/Bella Doceria/imagens/produtos/Surpresa de uva.png", preco: "R$ 17,90" },
        { id: "p33", nome: "Pudim", imagem: "/Bella Doceria/imagens/produtos/Pudim.png", preco: "R$ 17,90" },
        { id: "p34", nome: "Rosquinha", imagem: "/Bella Doceria/imagens/produtos/Rosquinha.png", preco: "R$ 17,90" },
        { id: "p35", nome: "Pudim de chocolate", imagem: "/Bella Doceria/imagens/produtos/Pudim de chocolate.png", preco: "R$ 17,90" },
        { id: "p36", nome: "Quindim", imagem: "/Bella Doceria/imagens/produtos/Quindim.png", preco: "R$ 17,90" },
        { id: "p37", nome: "Mousse de morango", imagem: "/Bella Doceria/imagens/produtos/Mousse de morango.png", preco: "R$ 17,90" },
        { id: "p38", nome: "Mousse de limão", imagem: "/Bella Doceria/imagens/produtos/Mousse de limão.png", preco: "R$ 17,90" },
        { id: "p39", nome: "Beijinho", imagem: "/Bella Doceria/imagens/produtos/Beijinho.png", preco: "R$ 17,90" },
        { id: "p40", nome: "Trufa", imagem: "/Bella Doceria/imagens/produtos/Trufa.png", preco: "R$ 17,90" },
        { id: "p41", nome: "Brownie", imagem: "/Bella Doceria/imagens/produtos/Brownie.png", preco: "R$ 17,90" },
        { id: "p42", nome: "Rocambole", imagem: "/Bella Doceria/imagens/produtos/Rocambole.png", preco: "R$ 17,90" }
    ];

    // Filter only favorited products
    const produtosFavoritos = todosProdutos.filter(produto => favoritos.includes(produto.id));

    // Show message if no favorites (after filtering)
    if (produtosFavoritos.length === 0) {
        container.innerHTML = "<p>Nenhum produto favoritado ainda.</p>";
        return;
    }

    // Create product cards for each favorite
    produtosFavoritos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('produto');
        card.dataset.id = produto.id;

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" />
            <img class="favorito" 
                 data-produto-id="${produto.id}" 
                 data-favorito="true" 
                 src="/Bella Doceria/imagens/globais/ícones/cupcake colorido.png" 
                 alt="Remover dos favoritos">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
            <a href="https://wa.me/5581996522114?text=Olá! Gostaria de pedir um ${produto.nome}" target="_blank">
                <button>PEDIR</button>
            </a>
        `;

        container.appendChild(card);
    });

    // Add click event for favorite icons
    document.querySelectorAll('.favorito').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productId = this.dataset.produtoId;
            let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            const index = favoritos.indexOf(productId);
            
            // Toggle favorite status
            if (index > -1) {
                // Remove from favorites
                favoritos.splice(index, 1);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
                
                // Change icon to transparent
                this.src = "/Bella Doceria/imagens/globais/ícones/cupcake transparente.png";
                this.dataset.favorito = "false";
                
                // If on favorites page, remove the card with animation
                if (window.location.pathname.includes('favoritos')) {
                    const card = this.closest('.produto');
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    card.style.transition = 'all 0.3s ease';
                    
                    setTimeout(() => {
                        card.remove();
                        
                        // Check if no favorites left
                        if (container.children.length === 0 || 
                            (container.children.length === 1 && container.children[0].tagName === 'P')) {
                            container.innerHTML = "<p>Nenhum produto favoritado ainda.</p>";
                        }
                    }, 300);
                }
            } else {
                // Add to favorites
                favoritos.push(productId);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
                
                // Change icon to colored
                this.src = "/Bella Doceria/imagens/globais/ícones/cupcake colorido.png";
                this.dataset.favorito = "true";
            }
        });
    });
});