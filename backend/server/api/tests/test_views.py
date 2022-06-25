from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory

from ..models import KMeans
from ..views import KMeansViewSet


class APIViewTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        KMeans.objects.create(prefecture='北海道',
                        city='札幌市',
                        ward='中央区',
                        total_population=50000,
                        those_under_15=10000,
                        those_between_15_and_64=40000,
                        those_over_65=10000,
                        kindergartens=4,
                        elementary_schools=5,
                        junior_high_schools=10,
                        high_schools=5,
                        hospitals=10,
                        population_trends=1.5,
                        move_in_ratio=4.5,
                        move_out_ratio=4.0,
                        primary_industry_ratio=0.5,
                        secondary_industry_ratio=13.5,
                        tertiary_industry_ratio=86.0,
                        cluster=2)

    def test_get_all_municipalities(self):
        factory = APIRequestFactory()
        view = KMeansViewSet.as_view({'get': 'list'})
        url = "http://127.0.0.1:8000/api/results"
        request = factory.get(url)
        response = view(request)

        self.assertEquals(response.status_code, status.HTTP_200_OK)

    def test_get_cities(self):
        factory = APIRequestFactory()
        view = KMeansViewSet.as_view({'get': 'list'})
        url = "http://127.0.0.1:8000/api/results?city=札幌市"
        request = factory.get(url)
        response = view(request)

        self.assertEquals(response.status_code, status.HTTP_200_OK)

    def test_get_cities_with_cluster(self):
        factory = APIRequestFactory()
        view = KMeansViewSet.as_view({'get': 'list'})
        url = "http://127.0.0.1:8000/api/results?pref=北海道&cluster=2"
        request = factory.get(url)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_municipalities_with_cluster(self):
        factory = APIRequestFactory()
        view = KMeansViewSet.as_view({'get': 'list'})
        url = "http://127.0.0.1:8000/api/results?cluster=2"
        request = factory.get(url)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_get_municipality(self):
        factory = APIRequestFactory()
        view = KMeansViewSet.as_view({'get': 'list'})
        url = "http://127.0.0.1:8000/api/results?pref=北海道&city=札幌市&ward=中央区"
        request = factory.get(url)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
