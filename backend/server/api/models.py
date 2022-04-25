from django.db import models


class KMeans(models.Model):
    prefecture = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    cluster = models.IntegerField()
    

