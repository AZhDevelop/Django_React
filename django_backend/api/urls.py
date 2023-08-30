from django.urls import path
from .views import SRApiView

urlpatterns = [
    path('', SRApiView.as_view())
]