import json
from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
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
            if request.POST.get('message'):
                current_message = Message(sender=request.user, receiver=users[0],
                                          message_text=request.POST.get('message'))
                current_message.save()
                response = {'status': 'true', 'reason': 'Message sent'}
                send_notification(request.user, 'New message from {0}'.format(users[0]),
                                  current_message.message_text, '/messaging/inbox')
            else:
                response = {'status': 'false', 'reason': 'Please enter a message!'}
    return HttpResponse(json.dumps(response, cls=DjangoJSONEncoder), content_type='application/json')


@login_required()
def inbox(request):
    my_messages = Message.objects.filter(receiver=request.user)
    return render(request, 'messaging/inbox.html', {'my_messages': my_messages})
