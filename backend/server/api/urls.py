from django.urls import path
from .views import Clustering

urlpatterns = [
    path('result/', Clustering.as_view(), name='clustering')
]
