from django.conf.urls import patterns, url
from main_app import views

__author__ = 'Anant'

urlpatterns = patterns('',
                       url(r'^$', views.home, name='dashboard'),
)