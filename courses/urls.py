from django.conf.urls import patterns, url
from courses import views

urlpatterns = patterns(
    '',
    url(r'^add_mp_grade/(?P<mp_id>\d+)/(?P<student_id>\d+)/$', views.add_mp_grade, name='add_mp_grade'),
    url(r'^$', views.course_index, name='course_index'),
)