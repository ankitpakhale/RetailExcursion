from django.shortcuts import render

# project modules import
from base.models import Product
from base.serializers import ProductSerializer

# rest_framework imports
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status




@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    productData = Product.objects.get(_id = pk)
    serializer = ProductSerializer(productData)
    return Response(serializer.data)
