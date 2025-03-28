from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator

#criando a tabela categoria no banco de dados
class Categoria(models.Model):
    #atributos da tabela
    nome = models.CharField(max_length=100, unique=True)
    descricao = models.TextField(blank=True, null=True)
    
    #retornando o nome após conversão para string/json
    def __str__(self):
        if self.descricao:
            return f"{self.nome}: {self.descricao}"
        return self.nome
    
    #configurando como a tabela será exibida no banco de dados
    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"


#criando a tabela produtos para integrar o banco de dados do Django Admin
class Produto(models.Model):
    #abaixo, atributos que essa tabela vai ter
    nome = models.CharField(max_length=100) 
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    descricao_produto = models.TextField(blank=True, null=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)
    ativo = models.BooleanField(default=True)

    #configuração dos metadados e comportamento da tabela produto, atraves da class Meta
    class Meta:
        verbose_name = "Produto"
        verbose_name_plural = "Produtos"
        ordering = ['-data_cadastro']
        db_table = 'Produtos'
        indexes = [
            models.Index(fields=['nome']),
        ]
        permissions = [
            ("gerenciar_estoque", "Pode alterar disponibilidade de produtos"),
        ]

    #retorno do nome do produto após ser convertido em STRING/JSON 
    def __str__(self):
        return self.nome
