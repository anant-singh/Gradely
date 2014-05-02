from django.conf.urls import patterns, include, url

from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns(
    '',
    # Examples:
    # url(r'^$', 'Gradely.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^accounts/login/$', 'main_app.views.login_view', name='login_view'),
    url(r'^accounts/logout/$', 'main_app.views.logout_view', name='logout_view'),
    url(r'^accounts/register/$', 'main_app.views.register_view', name='register_view'),
    url(r'^accounts/auth/$', 'main_app.views.auth_view', name='auth_view'),
    url(r'', include('main_app.urls', namespace='main_app')),
    url(r'^notifications/', include('notifications.urls', namespace='notifications')),
    url(r'^messaging/', include('messaging.urls', namespace='messaging')),
    url(r'^courses/', include('courses.urls', namespace='courses'))
)
