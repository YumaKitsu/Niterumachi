from email.mime import base
from django.urls import path
from rest_framework import routers
from .views import KMeansViewSet

router = routers.DefaultRouter()
router.register(r'result', KMeansViewSet, basename='result')

urlpatterns = router.urls