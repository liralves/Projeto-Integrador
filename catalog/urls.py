from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Página inicial do aplicativo "catalog"
    path('home/<int:categoria_id>/', views.home, name='home_por_categoria'),
    path('contato/', views.contato, name='contato'),
    path('sobre/', views.sobre, name='sobre'),
]
