from django.shortcuts import render
from rest_framework import viewsets
from .models import KMeans
from .serializers import KMeansSerializer


# Create your views here.
class KMeansViewSet(viewsets.ModelViewSet):
   queryset = KMeans.objects.all()
   serializer_class = KMeansSerializer
