from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # fields = ['name', 'image', 'brand', 'category', 'description', 'rating', 'numReviews', 'price', 'countInStock', 'createdAt', '_id'] 
        fields = '__all__' 



