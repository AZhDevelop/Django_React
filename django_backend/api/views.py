from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from sr_staff.models import *

# Create your views here.

class SRApiView(APIView):

    def get(self, request):
        sr_list = SR_Staff.objects.all().values()
        org_list = Organization.objects.all().values()
        return Response({'sr_staff' : list(sr_list), 'organization' : list(org_list)})
    
    name = "SR_Api"
    
    def __str__(self):
        return (f'{self.name}')