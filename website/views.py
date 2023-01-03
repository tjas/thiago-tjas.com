from django.shortcuts import render
from django.views.generic.base import TemplateView

# Create your views here.

class Home(TemplateView):
    template_name = "home.html"
    context_object_name = "home"

    def get(self, request, *args, **kwargs):
        return render(request, 'home.html', {})
