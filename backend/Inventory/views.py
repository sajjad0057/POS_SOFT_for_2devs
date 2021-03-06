from rest_framework import viewsets
from rest_framework.parsers import FormParser,MultiPartParser
from .models import Category,Brand,Product
from .serializers import CategorySerializer,BrandSerializer,ProductSerializer

# Create your views here.


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    

class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    
    
    

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    parser_classes = [FormParser,MultiPartParser] 
    
    