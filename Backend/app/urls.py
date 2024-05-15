from django.urls import path
from .views import RegisterView, LoginView, UserView, LogoutView, BookListView, BookDetailView, GenreListView, GenreDetailView, BorrowListView, BorrowDetailView, CartDetailView, AddToCartView, RemoveFromCartView, ClearCartView, TotalUsersView, UserListView, UserDeleteView
urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('total-users', TotalUsersView.as_view()),
    path('users/', UserListView.as_view(), name='user-list'), 
    path('api/<int:user_id>/', UserDeleteView.as_view(), name='delete_user'),   
    path('books/', BookListView.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetailView.as_view(), name='book-detail'),
    path('genres/', GenreListView.as_view(), name='genre-list'),
    path('genres/<int:pk>/', GenreDetailView.as_view(), name='genre-detail'),
    path('borrows/', BorrowListView.as_view(), name='borrow-list'),
    path('borrows/<int:pk>/', BorrowDetailView.as_view(), name='borrow-detail'),   
    path('cart/', CartDetailView.as_view(), name='cart-detail'),
    path('cart/add/', AddToCartView.as_view(), name='add-to-cart'),
    path('cart/remove/', RemoveFromCartView.as_view(), name='remove-from-cart'),
    path('cart/clear/', ClearCartView.as_view(), name='clear-cart'), 
]