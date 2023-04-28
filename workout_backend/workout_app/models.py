from django.db import models
from django.contrib.auth.models import AbstractUser
from django.apps import apps

class Exercise(models.Model):
    exercise_name = models.CharField(max_length=255)
    sets = models.IntegerField(default=0)
    weight = models.IntegerField(default=0)
    rep_range = models.CharField(default=0)

class Workout_Log(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    date = models.CharField(max_length=255, null=True, blank=True)
    exercises = models.ManyToManyField(Exercise, related_name='workout_logs', null=True)

class History(models.Model):
    workout_logs = models.ManyToManyField(Workout_Log, related_name='history', null=True)

class User(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True)
    name = models.CharField(max_length=255, null=False, blank=False)
    workout_history = models.OneToOneField(History, on_delete=models.CASCADE, null=True, blank=True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.name} | {self.email}"
    
apps.register_model(User, model=AbstractUser)