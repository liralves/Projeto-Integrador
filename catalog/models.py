from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from django.utils import timezone

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
    imagem = models.ImageField(upload_to='produtos/', null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)
    ativo = models.BooleanField(default=True)
    categoria = models.ForeignKey(
    Categoria,
    on_delete=models.CASCADE,
    related_name='produtos',
    verbose_name='Categoria',
    )

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
        return f'{self.nome}, {self.preco}'

class Pedido(models.Model):
    # Status do pedido (ex: pendente, em preparação, enviado, entregue)
    STATUS_CHOICES = [
        ('pendente', 'Pendente'),
        ('preparando', 'Preparando'),
        ('enviado', 'Enviado'),
        ('entregue', 'Entregue'),
    ]
    
    usuario = models.ForeignKey(User, on_delete=models.CASCADE) 
    data_pedido = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pendente')
    valor_total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    
    def __str__(self):
        return f"Pedido #{self.id} - {self.usuario.username} - {self.status}"
    
    class Meta:
        verbose_name = "Pedido"
        verbose_name_plural = "Pedidos"

