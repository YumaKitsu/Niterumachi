from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework import filters
from .models import KMeans
from .serializers import KMeansSerializer


# Create your views here.
class KMeansViewSet(mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                     viewsets.GenericViewSet
                    ):
    queryset = KMeans.objects.all()
    serializer_class = KMeansSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['prefecture', 'city']

