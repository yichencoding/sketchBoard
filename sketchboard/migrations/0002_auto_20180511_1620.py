# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-11 20:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sketchboard', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='textbox',
            name='left',
            field=models.CharField(default='50px', max_length=200),
        ),
        migrations.AlterField(
            model_name='textbox',
            name='top',
            field=models.CharField(default='50px', max_length=200),
        ),
    ]
