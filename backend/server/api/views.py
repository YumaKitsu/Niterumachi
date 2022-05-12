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
    serializer_class = KMeansSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['prefecture', 'city']

    def get_queryset(self):
        queryset = KMeans.objects.all()
        prefecture = self.request.query_params.get('pref')
        city = self.request.query_params.get('city')
        if city is not None:
            queryset = queryset.filter(prefecture=prefecture).filter(city=city)
        elif prefecture is not None:
            queryset = queryset.filter(prefecture=prefecture)
        return queryset



