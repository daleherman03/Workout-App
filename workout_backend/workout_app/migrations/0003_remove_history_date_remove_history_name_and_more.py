# Generated by Django 4.2 on 2023-04-26 22:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workout_app', '0002_alter_history_log_alter_user_workout_history_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='history',
            name='date',
        ),
        migrations.RemoveField(
            model_name='history',
            name='name',
        ),
        migrations.AddField(
            model_name='workout_log',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='workout_log',
            name='name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
