from rest_framework import serializers
from  .models import Category,Brand,Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ['user',]



class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        exclude = ['user',]
        
        

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = ['user','product_image','quantity']