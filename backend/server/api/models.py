from re import A
from django.db import models
from .apps import ApiConfig

class KMeansManager(models.Manager):
    def predict(self, prefecture, city, habitable_area, forest_area, cluster):
        result = self.create(prefecture=prefecture, city=city, habitable_area=habitable_area, forest_area=forest_area,  cluster=cluster)
        return result 
class KMeans(models.Model):
    prefecture = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    forest_area = models.FloatField()
    habitable_area = models.FloatField()
    cluster = models.IntegerField()

    objects = KMeansManager()

    def __str__(self) -> str:
        return f'{self.prefecture} {self.city}'




# for (key, value) in ApiConfig.ml_model.items():
#     result = KMeans.objects.predict(prefecture=key.split()[0], city=key.split()[1], habitable_area=value[0], forest_area=value[1], cluster=value[2])

