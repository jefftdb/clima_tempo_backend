from django.urls import path
from clima_tempo import views

urlpatterns = [
    path('', views.index, name = 'index' ),
    path('<str:cidade>/', views.clima, name = 'clima' ),
]