from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from sr_staff.models import SR_Staff

# Create your views here.

class SRApiView(APIView):

    def get(self, request):
        sr_list = SR_Staff.objects.all().values()
        return Response({'sr_staff' : list(sr_list)})