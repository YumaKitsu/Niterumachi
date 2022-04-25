import os
import joblib
from django.conf import settings
from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'
    ML_MODEL_FILE = os.path.join(settings.ML_MODEL, 'clustering_result.joblib')
    ml_model = joblib.load(ML_MODEL_FILE)


  

