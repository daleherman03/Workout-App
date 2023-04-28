from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.user_capabilities, name='user_capabilities'),
    path('log/', views.log, name='log')
]