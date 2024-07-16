from django.http import HttpResponse

def Home(request):
    return HttpResponse('Welcome to Django')

def About(request):
    return HttpResponse('About Us page')
