from django.contrib import admin
from django.utils.html import mark_safe
from catalog.models import Categoria, Produto

admin.site.register(Categoria)

@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'preco', 'descricao_produto', 'ativo', 'data_cadastro', 'imagem_preview')
    list_filter = ('ativo',)
    readonly_fields = ('imagem_preview',)

    def imagem_preview(self, obj):
        if obj.imagem:  # supondo que o campo de imagem seja 'imagem'
            return mark_safe(f'<img src="{obj.imagem.url}" width="100" height="100" />')
        return "-"
    
    imagem_preview.short_description = "Imagem"
