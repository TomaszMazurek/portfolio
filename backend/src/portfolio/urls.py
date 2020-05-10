from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='react.html')),
    path('blog/', TemplateView.as_view(template_name='react.html')),
    path('blog/<int:post_id>/', TemplateView.as_view(template_name='react.html')),
    path('aboutme/', TemplateView.as_view(template_name='react.html')),
    path('projects/', TemplateView.as_view(template_name='react.html')),
    path('materialEditor/', TemplateView.as_view(template_name='materialEditor.html')),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/', include('articles.api.urls')),
    path('admin/', admin.site.urls)
]
