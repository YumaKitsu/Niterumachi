from rest_framework.serializers import ModelSerializer
from .models import KMeans


class KMeansSerializer(ModelSerializer):
    class Meta:
        model = KMeans
        fields = ['prefecture', 'city', 'habitable_area', 'forest_area', 'cluster']