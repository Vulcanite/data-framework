from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login, name='login'),
    path('', views.home, name='home'),
    path('listpage', views.listpage, name='listpage'),
    path('registration', views.registration, name='registration'),
    path('getdata', views.receive_data, name='getdata')
]