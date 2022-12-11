# Uruchomienie port-forward dla wszystkich dronów
```bash
kubectl -n default port-forward svc/dron1 8081
kubectl -n default port-forward svc/dron2 8082
kubectl -n default port-forward svc/dron3 8083
kubectl -n default port-forward svc/dron4 8084
```
# Dostęp z przeglądarki
    http://localhost:8081
    http://localhost:8082
    http://localhost:8083
    http://localhost:8084
