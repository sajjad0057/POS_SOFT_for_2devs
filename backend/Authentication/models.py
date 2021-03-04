from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
    username = models.OneToOneField(User,on_delete=models.CASCADE)
    full_name = models.CharField(max_length=28,blank=True)
    
    
    def __str__(self):
        return f'{self.username}'

