
import requests
import os



API_key = 'e5bc9c77d59138e53aec43cefe83ae23'
cidade = 'Rio de Janeiro'

link = f'https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={API_key}'

request = requests.get(link)
request_dic = request.json()

weather = request_dic['weather'][0]
temp = request_dic['main']
temperatura = temp['temp'] -273.15
icone = f"http://openweathermap.org/img/wn/{weather['icon']}@2x.png"
lon = request_dic['coord']['lon']
lat = request_dic['coord']['lat']

#print(f'{cidade} está {int(temperatura)}ºC')
#print(icone)
#print(lon)

print(request_dic)

