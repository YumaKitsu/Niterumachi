from rest_framework.serializers import ModelSerializer
from .models import KMeans


class KMeansSerializer(ModelSerializer):
    class Meta:
        model = KMeans
        fields = '__all__'
        read_only_fields = [fields]