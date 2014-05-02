from django.conf.urls import patterns, url
from main_app import views

urlpatterns = patterns(
    '',
    url(r'^$', views.home, name='dashboard'),
)