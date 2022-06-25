from email.mime import base
from django.urls import path, reverse
from rest_framework import routers
from .views import KMeansViewSet


router = routers.DefaultRouter()
router.register(r'results', KMeansViewSet, basename='results')

urlpatterns = router.urls