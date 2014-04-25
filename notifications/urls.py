from django.conf.urls import patterns, url
from notifications import views

urlpatterns = patterns(
    '',
    url(r'^get_notifications/$', views.get_notifications, name='get_notifications'),
    url(r'^mark_notification_as_read/$', views.mark_notification_as_read, name='mark_as_read'),
)
