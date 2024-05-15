from rest_framework.permissions import BasePermission
import jwt
from .models import User
from django.conf import settings

class IsAdminUser(BasePermission):
    def has_permission(self, request, view):
        token = request.COOKIES.get('jwt')

        if not token:
            return False

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user_id = payload.get('id')
            user = User.objects.get(id=user_id)
            return user.is_superuser 
        except (jwt.ExpiredSignatureError, jwt.InvalidTokenError, User.DoesNotExist):
            return False