from tabnanny import check
from django.http import JsonResponse
from django.shortcuts import render


domains = ['AI', 'Cybsecurity', 'MATH']
blacklist = ["hotmail", "gmail", "outlook"]
dropdown = ["Password Cracker", "Lock System", "Facial Recognition"]
checkbox = ["ML", "DataScience", "AI", "Web Developement"]
radio = ["Comps", "IT", "EXTC", "Mechanical"]

form_config = {
    'domains' : domains,
    'blacklist': blacklist,
    'dropdown': dropdown,
    'radio': radio,
    'checkbox' : checkbox
}

#WEBPAGE REQUEST FUNCTIONS
def login(request):
    return render(request, "login.html")

def listpage(request):
    return render(request, "list.html")

def registration(request):
    return render(request, "registration.html")

def home(request):
    return render(request, "home.html", {"logs": form_config})


#API DATA FUNCTIONS
def receive_data(request):
    return JsonResponse(form_config)


def send_data(request):
    data = {"logs":"value"}
    return JsonResponse(data)
