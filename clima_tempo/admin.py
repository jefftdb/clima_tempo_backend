from django.contrib import admin
from clima_tempo.models import Clima

class ClimaAmdmin(admin.ModelAdmin):
    
    list_display = ['clima','cidade','dia','descricao_temp','temp_min','temp_max']
    search_fields = ['cidade','dia']

admin.site.register(Clima,ClimaAmdmin)