from rest_framework import viewsets
from ..models import Users
from .serializers import UserSerializers


class UsersView(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializers