from django.conf.urls import patterns, url
from courses import views

urlpatterns = patterns(
    '',
    url(r'^create_course/$', views.create_course, name='create_course'),
    url(r'^$', views.course_index, name='course_index'),
)