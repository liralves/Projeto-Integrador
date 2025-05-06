from django.shortcuts import render
from catalog.models import Produto

def home(request):
    # Buscando todos os produtos ativos
    produtos = Produto.objects.filter(ativo=True)
    return render(request, 'catalog/home.html', {'produtos': produtos})