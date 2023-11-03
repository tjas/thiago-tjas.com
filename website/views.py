from django.shortcuts import render
from django.views.generic.base import TemplateView

""" from django.conf import settings
from django.http import HttpResponse, HttpRequest
from django.utils import translation """

# Create your views here.

class Home(TemplateView):
    template_name = "home.html"
    context_object_name = "home"

    def get(self, request, *args, **kwargs):
        return render(request, 'home.html', {})

""" def translate(request: HttpRequest):
    if request.method == 'GET':
        language = request.GET.get('language', 'en')
        translation.activate(language)
        response = HttpResponse('home.html')
        #response.set_cookie(settings.LANGUAGE_COOKIE_NAME, language)
        settings.LANGUAGE_COOKIE_NAME = language
        return response """