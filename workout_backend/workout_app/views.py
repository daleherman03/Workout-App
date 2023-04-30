from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth import logout
from .utilities import sign_up, log_in, curr_user, submit_log, get_history, get_log
from django.core.serializers import serialize

import json

# Create your views here.

@api_view(['POST', 'PUT', 'GET'])
def user_capabilities(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            try:
                # Removes SessionID
                logout(request)
                return JsonResponse({"logout":True})
            except Exception as e:
                print(e)
                return JsonResponse({"logout":False})
        else:
            return sign_up(request.data)

        
    elif request.method == 'PUT':
        return log_in(request)
    
    elif request.method == 'GET':
        return curr_user(request)

@api_view(['POST', 'PUT', 'GET'])
def log(request):
    if request.method == 'POST':
        submit_log(request.data, request.user)
        return JsonResponse({'Log_Submitted':True})
        

@api_view(['GET', 'POST'])
def history(request):
    if request.method == 'GET':
        workout_logs = get_history(request.user)
        return workout_logs
    
    elif request.method == 'POST':
        workout_log_pk = request.data['pk']
        log_data = get_log(workout_log_pk)
        print(log_data)
        if log_data is not None:
            return JsonResponse(log_data, safe=False)
        else:
            return JsonResponse({'error': 'Workout log not found.'})