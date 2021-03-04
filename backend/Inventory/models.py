from django.db import models
from django.contrib.auth.models import User
from Authentication.models import UserProfile
# Create your models here.

class Category(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    category_name = models.CharField(max_length=64,blank=True)
    created = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return self.category_name
    
    




class Brand(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    brand_name = models.CharField(max_length=64,blank=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.brand_name
    
    


def upload_product_image(instance,filename):
    return f'product_image/{instance.user}/{instance.brand}/{filename}'
    
class Product(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand,on_delete=models.CASCADE)
    product_name = models.CharField(max_length=128,blank=True)
    product_image = models.ImageField(upload_to=upload_product_image,blank=True, null=True)
    product_code = models.CharField(max_length=64,blank=True)
    purchase_price = models.CharField(max_length=28,blank=True)
    sell_price = models.CharField(max_length=28,blank=True)
    quantity = models.CharField(default=0,blank=True,max_length=28)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.product_name
    
        
