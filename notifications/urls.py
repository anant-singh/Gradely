from django.conf.urls import patterns, url
from notifications import views

urlpatterns = patterns(
    '',
    url(r'^get_notifications/$', views.get_notifications, name='get_notifications'),
)
