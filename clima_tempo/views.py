from django.shortcuts import render
from clima_tempo.models import Clima
from django.http import JsonResponse
from django.core.serializers import serialize


def index(request):
    return render(request,'index.html',context={'mensagem':'você está na pagina inicial'})


def clima(request,cidade):
    cidade = request.GET.get('cidade', None)  # Obtém o parâmetro da URL
    if cidade:
        dados = Clima.objects.filter(cidade__iexact=cidade).values('cidade', 'dia', 'descricao_temp', 'temp_min', 'temp_max')
    else:
        dados = Clima.objects.all().values('cidade', 'dia', 'descricao_temp', 'temp_min', 'temp_max')
        
    return JsonResponse(list(dados), safe=False)



