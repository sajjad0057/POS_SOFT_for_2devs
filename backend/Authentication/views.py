from rest_framework import viewsets
from .models import UserProfile
from django.contrib.auth.models import User
from .serializers import UserSerializer,UserProfileSerializer


# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    
    
class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    
