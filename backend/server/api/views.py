from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from .apps import ApiConfig


# Create your views here.
class Clustering(APIView):
    def get(self, request):
        k_means_model = ApiConfig.ml_model
        return Response(k_means_model, status=200)
