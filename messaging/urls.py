from django.conf.urls import patterns, url
from messaging import views

urlpatterns = patterns(
    '',
    url(r'^send_message/$', views.send_message, name='send_message'),
    url(r'^inbox/$', views.inbox, name='inbox'),
)
