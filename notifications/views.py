from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from models import Notification


@login_required()
def get_notifications(request):
    """
    Return the notifications for the user.
    """
    if request.method != 'POST':
        return
    notifications = Notification.objects.filter(to_user=request.user)
    if len(notifications) == 0:
        notifications = None
    else:
        notifications = sorted(notifications, key=lambda k: k.date_time, reverse=True)

    return render(request, 'notifications/notification_list.html', {'notifications': notifications})
