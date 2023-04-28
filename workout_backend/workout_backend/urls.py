from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def send_the_index(request):
    # returns the index from React Project
    the_index = open('static/index.html')
    return HttpResponse(the_index)

urlpatterns = [
    path('', send_the_index),
    path('admin/', admin.site.urls),
    path('user/', include('workout_app.urls'))
]