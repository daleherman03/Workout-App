# Generated by Django 4.2 on 2023-04-28 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workout_app', '0004_delete_exercise_info_remove_history_log_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workout_log',
            name='date',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
