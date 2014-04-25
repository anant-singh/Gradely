import json
from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from messaging.models import Message
from notifications.api import send_notification


@login_required()
def send_message(request):
    if request.method == 'POST':
        name = request.POST.get('to_user')
        if len(name.split()) < 2:
            users = User.objects.filter(username=name)
        else:
            users = User.objects.filter(first_name__icontains=name.split()[0], last_name__icontains=name.split()[1])
        if len(users) == 0:
            response = {'status': 'false', 'reason': 'Sorry! User not found'}
        elif request.user.username == users[0].username:
            response = {'status': 'false', 'reason': 'Cannot Send Message to yourself!'}
        else:
            if request.POST.get('subject'):
                if request.POST.get('message'):
                    current_message = Message(sender=request.user, receiver=users[0],
                                              subject=request.POST.get('subject'),
                                              message_text=request.POST.get('message'))
                    current_message.save()
                    response = {'status': 'true',
                                'reason': 'Message successfully sent to {0}.'.format(current_message.receiver)}
                    send_notification(users[0], 'New message from {0}'.format(current_message.sender),
                                      current_message.subject, '/messaging/inbox')
                else:
                    response = {'status': 'false', 'reason': 'Please enter a message!'}
            else:
                response = {'status': 'false', 'reason': 'Please enter a subject!'}
    return HttpResponse(json.dumps(response, cls=DjangoJSONEncoder), content_type='application/json')


@login_required()
def inbox(request):
    my_messages = Message.objects.filter(receiver=request.user)
    my_messages = sorted(my_messages, key=lambda k: k.date_time, reverse=True)
    return render(request, 'messaging/inbox.html', {'my_messages': my_messages})
