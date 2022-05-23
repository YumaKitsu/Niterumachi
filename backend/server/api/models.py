from django.db import models
from .apps import ApiConfig


class KMeansManager(models.Manager):
    def predict(self,
                prefecture,
                city,
                ward,
                total_population,
                those_under_15,
                those_between_15_and_64,
                those_over_65,
                kindergardens,
                elementary_schools,
                junior_high_schools,
                high_schools,
                hospitals,
                population_trends,
                move_in_ratio,
                move_out_ratio,
                primary_industry_ratio,
                secondary_industry_ratio,
                tertiary_industry_ratio,
                cluster):

        result = self.create(prefecture=prefecture, 
                             city=city,
                             ward=ward,
                             total_population=total_population,
                             those_under_15=those_under_15,
                             those_between_15_and_64=those_between_15_and_64,
                             those_over_65=those_over_65,
                             kindergardens=kindergardens,
                             elementary_schools=elementary_schools,
                             junior_high_schools=junior_high_schools,
                             high_schools=high_schools,
                             hospitals=hospitals,
                             population_trends=population_trends,
                             move_in_ratio=move_in_ratio,
                             move_out_ratio=move_out_ratio,
                             primary_industry_ratio=primary_industry_ratio,
                             secondary_industry_ratio=secondary_industry_ratio,
                             tertiary_industry_ratio=tertiary_industry_ratio,
                             cluster=cluster)
        return result


class KMeans(models.Model):
    prefecture = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    ward = models.CharField(max_length=50, null=True, blank=True)
    total_population = models.IntegerField()
    those_under_15 = models.IntegerField()
    those_between_15_and_64 = models.IntegerField()
    those_over_65 = models.IntegerField()
    kindergardens = models.IntegerField()
    elementary_schools = models.IntegerField()
    junior_high_schools = models.IntegerField()
    high_schools = models.IntegerField()
    hospitals = models.IntegerField()
    population_trends = models.FloatField()
    move_in_ratio = models.FloatField()
    move_out_ratio = models.FloatField()
    primary_industry_ratio = models.FloatField()
    secondary_industry_ratio = models.FloatField()
    tertiary_industry_ratio = models.FloatField()
    cluster = models.IntegerField()

    objects = KMeansManager()

    def __str__(self) -> str:
        return f'{self.prefecture} {self.city} {self.ward}'


# for (key, value) in ApiConfig.ml_model.items():
#     municipality_name = key.split()
#     try:
#         ward =   municipality_name[2]
#     except IndexError:
#         ward = None
#     finally:
#         prefecture = municipality_name[0]
#         city = municipality_name[1]
#     result = KMeans.objects.predict(prefecture=prefecture,
#                                     city=city,
#                                     ward=ward,
#                                     total_population=value[0],
#                                     those_under_15=value[1],
#                                     those_between_15_and_64=value[2],
#                                     those_over_65=value[3],
#                                     kindergardens=value[4],
#                                     elementary_schools=value[5],
#                                     junior_high_schools=value[6],
#                                     high_schools=value[7],
#                                     hospitals=value[8],
#                                     population_trends=value[9],
#                                     move_in_ratio=value[10],
#                                     move_out_ratio=value[11],
#                                     primary_industry_ratio=value[12],
#                                     secondary_industry_ratio=value[13],
#                                     tertiary_industry_ratio=value[14],
#                                     cluster=value[15]
#                                     )
