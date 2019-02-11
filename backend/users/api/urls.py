from rest_framework.routers import DefaultRouter
from .views import UsersView

router = DefaultRouter()
router.register(r'', UsersView, basename='Users')
urlpatterns = router.urls

