from django.shortcuts import render
from django.http import HttpResponse
from .summarizer import SummarizeText

# Create your views here.
def main(request):
    return HttpResponse("Hello")