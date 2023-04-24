from django.db import models
from django.contrib.auth.models import AbstractUser

class Exercises(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    equipment = models.CharField(max_length=255)
    difficulty = models.CharField(max_length=255)
    instructions = models.TextField()

class Log(models.Model):
    exercise = models.ForeignKey(Exercises, on_delete=models.CASCADE, null = True)
    weight = models.IntegerField(default=0)
    reps = models.IntegerField(default=0)

class History(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateField()
    log = models.ForeignKey(Log, on_delete=models.CASCADE, null = True)

class User(AbstractUser):
    email = models.EmailField(blank = False, null = False, unique = True)
    name = models.CharField(max_length = 255, null = False, blank = False)
    history = models.ForeignKey(History, on_delete=models.CASCADE, null = True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return f"{self.name} | {self.email}"