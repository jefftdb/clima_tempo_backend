from django.db import models

class Clima(models.Model):
    id = models.AutoField(primary_key=True)
    clima = models.CharField(max_length=30)
    cidade = models.CharField(max_length=50)
    dia = models.DateField()
    descricao_temp = models.CharField(max_length=255)
    temp_min = models.CharField(max_length=50)
    temp_max = models.CharField(max_length=50)

    def __str__(self):
        return self.cidade
    
    