from django.shortcuts import render
from rest_framework import viewsets
from .models import Products
from .serializers import ProductSerializers
# from rest_framework.parsers import FileUploadParser
# Create your views here.

class ProductView(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductSerializers
    # parser_classes = [FileUploadParser]