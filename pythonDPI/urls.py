from django.conf import settings
from django.views.generic import RedirectView
from django.conf.urls.static import static
from django.conf.urls import include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls), #
    path('catalog/', include('catalog.urls')),
    path('', RedirectView.as_view(url='/catalog/')),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)