import json
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.context_processors import csrf
from django.core.serializers.json import DjangoJSONEncoder
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render


# Create your views here.
@login_required()
def home(request):
    return render(request, 'main_app/profile.html', {})


def login_view(request):
    context = {}
    context.update(csrf(request))
    return render(request, 'main_app/login.html', context)


def register_view(request):
    if request.user.is_authenticated():
        return HttpResponseRedirect('/')
    if request.method == 'POST':
        user = User.objects.create_user(
            username=request.POST.get('username', ''),
            password=request.POST.get('password', ''),
            email=request.POST.get('email'),
            first_name=request.POST.get('firstname'),
            last_name=request.POST.get('lastname')
        )
        return HttpResponseRedirect('/')
    else:
        context = {}
        context.update(csrf(request))
    return render(request, 'main_app/register.html', context)


def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')


def auth_view(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = authenticate(username=username, password=password)

    if user is not None:
        if user.is_active:
            login(request, user)
            response = {'status': 'true'}
        else:
            response = {'status': 'false', 'reason': 'Verify e-mail'}
    else:
        response = {'status': 'false', 'reason': 'Invalid username/password'}

    return HttpResponse(json.dumps(response, cls=DjangoJSONEncoder), content_type='application/json')