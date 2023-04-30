from .models import User, History, Workout_Log, Exercise
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
import json


def sign_up(data):
    email = data['email']
    password = data['password']
    name = data['name']
    super_user = False
    staff = False
    if 'super' in data:
        super_user = data['super']
    if 'staff' in data:
        staff = data['staff']
    try:
        new_user = User.objects.create_user(username = email, email = email, name = name, password = password, is_superuser = super_user, is_staff = staff)
        new_user.save()
        new_history = History.objects.create(user=new_user)
        new_history.save()
        
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    
def log_in(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username = email , password = password)
    if user is not None and user.is_active:
        try:
            # Creates SessionID
            login(request._request, user)
            return JsonResponse({'email': user.email, 'name':user.name})
        except Exception as e:
            print(e)
            return JsonResponse({'login':False})
    return JsonResponse({'login':False})

def curr_user(request):
    if request.user.is_authenticated:
        #                    format       query                     options
        user_info = serialize("json",  [request.user], fields = ['email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":None})
    
def submit_log(data, user):
    workout_name = data['workoutName']
    workout_date = data['workoutDate']
    exercise_info = data['exercises']

    workout_log = Workout_Log.objects.create(name=workout_name, date=workout_date, )

    for exercise in exercise_info:
        name = exercise
        sets = exercise_info[exercise]['sets']
        weight = exercise_info[exercise]['weight']
        reps = exercise_info[exercise]['rep_range']

        new_exercise = Exercise.objects.create(exercise_name=name, sets=sets, weight=weight, rep_range=reps)
        new_exercise.save()

        workout_log.exercises.add(new_exercise)

    workout_log.save()
    
    if user.workout_history is None:
        history = History.objects.create()
        user.workout_history = history
        user.save()
    else:
        history = user.workout_history

    history.workout_logs.add(workout_log)
    history.save()


def get_history(user):
    history = serialize('json', user.workout_history.workout_logs.all())
    history_workable = json.loads(history)
    return JsonResponse(history_workable, safe=False)


def get_log(pk):
    try:
        workout_log = Workout_Log.objects.get(pk=pk)
        exercises = workout_log.exercises.all()
        serialized_exercises = serialize('json', exercises)
        exercises_workable = json.loads(serialized_exercises)
        return exercises_workable
    except Workout_Log.DoesNotExist:
        return None