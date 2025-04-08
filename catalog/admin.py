from django.contrib import admin
from catalog.models import Categoria, Produto

admin.site.register(Categoria)
@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'preco', 'descricao_produto', 'ativo', 'data_cadastro')
    list_filter = ('ativo',)
