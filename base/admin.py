from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display=['name', 'brand', 'category', 'description', 'rating', 'numReviews', 'price', 'countInStock', 'createdAt']

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display=['name', 'rating', 'comment']

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display=['paymentMethod', 'taxPrice', 'shippingPrice', 'totalPrice', 'isPaid', 'paidAt', 'idDelivered', 'deliveredAt', 'createdAt']

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display=['name', 'qty', 'price']

@admin.register(ShippingAddress)
class ShippingAddressAdmin(admin.ModelAdmin):
    list_display=['address', 'city', 'postalCode', 'country', 'shippingPrice']


