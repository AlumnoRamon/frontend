# Frontend del Proyecto

## Ejecución
Abrir index.html directamente o ejecutar:
start index.html

## Servidor local recomendado
python -m http.server 8080
Abrir: http://localhost:8080

## Docker
docker build -t daw-frontend .
docker run -p 8080:80 daw-frontend

## Dependencia del backend
Requiere backend ejecutándose en http://localhost:8000
