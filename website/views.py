from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.http import HttpRequest, HttpResponse
from django.conf import settings

import os

# Create your views here.

class Home(TemplateView):
    template_name = "home.html"
    context_object_name = "home"

    def get(self, request, *args, **kwargs):
        return render(request, 'home.html', {})
    
def robots(request: HttpRequest):
    if not settings.DEBUG:
        path = os.path.join(settings.STATIC_ROOT, 'robots.txt')
    else:
        path = os.path.join(settings.BASE_DIR, 'website/static/robots.txt')
    
    with open(path, 'r') as file:
        return HttpResponse(file, content_type='text/plain')

# def handler(request: HttpRequest):
#     return render(request, '404.html')