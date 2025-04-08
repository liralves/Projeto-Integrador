from django.urls import path, include
from django.contrib import admin
from catalog import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
]