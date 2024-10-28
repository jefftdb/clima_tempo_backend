from django.shortcuts import render


def index(request):
    return render(request,'index.html',context={'mensagem':'você está na pagina inicial'})


def clima(request,cidade):
    return render(request,'index.html',context={'mensagem': f'você está na pagina clima da {cidade}'})




