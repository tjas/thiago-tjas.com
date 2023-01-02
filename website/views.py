from django.shortcuts import render
from django.views.generic.base import TemplateView

# Create your views here.

class Home(TemplateView):
    template_name = "home.html"
    context_object_name = "home"
    # return HttpResponse("Hello, world. You're at the polls index.")
    # pass

    def get(self, request, *args, **kwargs):
        #logger.webapp_request(request)
        #     # update_user_prefered_project(request.user, request.GET['prefered_project'])
        # def get(self, request, *args, **kwargs):
            # super(request, *args, **kwargs)
            # super()
        #     projects = get_user_related_project(request)
            # return render(request, 'index.html', {'projects': projects})
        # answer = {
        #     'breadcrumbs': [
        #         {'node': 'Organizações', 'link': 'home'}, 
        #         {'node': 'BB Tecnologia e Serviços', 'link': 'home'}
        #     ], 
        #     'statistics': None,
        #     'context': None
        # }

        # if request.user.is_authenticated:
        #     return render(request, 'index.html', answer)
        # else:
        #     return render(request, 'access.html', {})

        return render(request, 'home.html', {})
