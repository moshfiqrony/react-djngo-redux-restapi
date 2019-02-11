from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=100, null=True)
    image = models.ImageField(upload_to='image', null=True)
    address = models.CharField(max_length=100, null=True)
