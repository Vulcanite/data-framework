from tabnanny import check
from django.http import JsonResponse
from django.shortcuts import render


domains = ['AI', 'Cybsecurity', 'MATH']
blacklist = ["hotmail", "gmail", "outlook"]
dropdown = []
checkbox = []
radio = []

form_config = {
    'domains' : domains,
    'blacklist': blacklist,
    'dropoptions': dropdown,
    'radio-options': radio,
    'checkbox' : checkbox
}

#WEBPAGE REQUEST FUNCTIONS
def login(request):
    return render(request, "home.html")

def listpage(request):
    return render(request, "list.html")

def registration(request):
    return render(request, "registration.html")

def home(request):
    return render(request, "home.html")


#API DATA FUNCTIONS
def receive_data(request):
    data = {"logs":"value"}
    return JsonResponse(data)


def send_data(request):
    data = {"logs":"value"}
    return JsonResponse(data)
