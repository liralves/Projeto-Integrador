from django.shortcuts import render
from catalog.models import Produto, Categoria
from django.shortcuts import render


def home(request, categoria_id=None):
    # Buscando todas as categorias
    categorias = Categoria.objects.all()
    produtos = Produto.objects.filter(ativo=True)  # Produtos ativos como padrão

    # Filtrar os produtos se uma categoria for selecionada
    categoria_selecionada = None
    if categoria_id:
        categoria_query = Categoria.objects.filter(id=categoria_id)
        if categoria_query.exists():
            categoria_selecionada = categoria_query.first()  # Obtendo a primeira (e única) categoria encontrada
            produtos = produtos.filter(categoria=categoria_selecionada)

    return render(request, 'catalog/home.html', {
        'produtos': produtos,
        'categorias': categorias,
        'categoria_selecionada': categoria_selecionada,
    })
def contato(request):
    return render(request, 'catalog/contato.html')

def sobre(request):
    return render(request, 'catalog/sobre.html')

def privacidade(request):
    return render(request, 'catalog/privacidade.html')