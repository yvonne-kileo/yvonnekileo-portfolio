from django.shortcuts import render


def home(request):
    return render(request, "index.html")


def about(request):
    return render(request, "pages/about.html")


def skills(request):
    return render(request, "pages/skills.html")


def projects(request):
    return render(request, "pages/projects.html")


def experience(request):
    return render(request, "pages/experience.html")


def contact(request):
    return render(request, "pages/contact.html")