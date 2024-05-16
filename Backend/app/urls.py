from django.urls import path
from .views import RegisterView, LoginView, UserView, LogoutView, TotalUsersView, UserListView, UserDeleteView
urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('total-users', TotalUsersView.as_view()),
    path('users/', UserListView.as_view(), name='user-list'), 
    path('users/<int:user_id>/', UserDeleteView.as_view(), name='delete_user'),   
]