from django.shortcuts import render
from django.http import JsonResponse

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

# project modules import
from .products import products
from .models import Product
from .serializers import ProductSerializer, UserSerializer, UserSerializerWithToken

# rest_framework imports
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status

# Customizing JWT token
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        custom_data = super().validate(attrs)
        
        # getting data from serializer itself
        serializer = UserSerializerWithToken(self.user).data
        for key, value in serializer.items():
            custom_data[key] = value

        return custom_data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# @api_view(['POST'])
# def registerUser(request):
#     data = request.data
#     try:
#         User.objects.get(
#             first_name = data['name'],
#             username = data['username'],
#             email = data['email'],
#         )
#         message = {'detail': 'User with this email already exist'}
#         return Response(message, status = status.HTTP_400_BAD_REQUEST)
#     except Exception:
#         user = User.objects.create(
#             first_name = data['name'],
#             username = data['username'],
#             email = data['email'],
#             password = make_password(data['password'])
#         )
#         serializer = UserSerializerWithToken(user, many=False)
#         return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        # It will automatically check duplication, it duplicate data found then it will throw error
        user = User.objects.create(
            first_name = data['name'],
            username = data['username'],
            email = data['email'],
            password = make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    except Exception:
        message = {'detail': 'User with this email already exist'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many = True)
    return Response(serializer.data)

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
