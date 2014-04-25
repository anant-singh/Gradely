from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import HttpResponse
from models import Notification
import json
from django.core.serializers.json import DjangoJSONEncoder


@login_required()
def get_notifications(request):
    """
    Return the notifications for the user.
    """
    if request.method != 'POST':
        return
    notifications = Notification.objects.filter(to_user=request.user, is_unread=True)
    if len(notifications) == 0:
        notifications = None
    else:
        notifications = sorted(notifications, key=lambda k: k.date_time, reverse=True)

    return render(request, 'notifications/notification_list.html', {'notifications': notifications})


@login_required()
def mark_notification_as_read(request):
    notification_pk = request.POST.get("notification_pk")
    notification = Notification.objects.get(pk=notification_pk)
    notification.is_unread = False
    notification.save()
    response = {'status': 'true'}
    return HttpResponse(json.dumps(response, cls=DjangoJSONEncoder), content_type='application/json')