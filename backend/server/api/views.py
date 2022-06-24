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
        ward = self.request.query_params.get('ward')
        cluster = self.request.query_params.get('cluster')
        if city:
            if ward:
                queryset = queryset.filter(city=city).filter(ward=ward)
            queryset = queryset.filter(city=city)
        elif ward:
            queryset = queryset.filter(ward=ward)

        elif prefecture:
            if cluster:
                queryset = queryset.filter(
                    prefecture=prefecture).filter(cluster=cluster)
            else:
                queryset = queryset.filter(prefecture=prefecture)
        elif cluster:
            queryset = queryset.filter(cluster=cluster)
        return queryset
