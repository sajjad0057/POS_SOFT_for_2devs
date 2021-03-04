from django.urls import path
from .views import UserViewSet,UserProfileViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'user',UserViewSet,basename = 'user')
router.register(r'user-profile',UserProfileViewSet,basename='user-profile')


urlpatterns = [
    
] + router.urls
