from django.urls import path
from .views import CategoryViewSet,BrandViewSet,ProductViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'category',CategoryViewSet,basename = 'category')
router.register(r'brand',BrandViewSet,basename = 'brand')
router.register(r'product',ProductViewSet,basename = 'product')



urlpatterns = [
    
] + router.urls