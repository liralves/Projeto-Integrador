from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.contrib import admin
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin
    path('catalog/', include('catalog.urls')),  # Inclui as rotas do app "catalog"
    path('', RedirectView.as_view(url='/catalog/')),
]

# Configurações de mídia e estáticos no ambiente de desenvolvimento
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
