# Deploy to kubernetes
```bash
export DRONES_COUNT=4
k apply -f kubernetes/service.yaml -f kubernetes/deployment.yaml
export POD_NAME=$(kubectl get pods --namespace default -o jsonpath="{.items[0].metadata.name}")
export SVC_NAME=$(kubectl get svc --namespace default -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward svc/$SVC_NAME 8080
kubectl exec $POD_NAME -- echo $DRONES_COUNT

```

# Parametryzowany deploy
```bash

export DRONES_COUNT=4
kubectl apply -f kubernetes/service.yaml -f kubernetes/deployment.yaml
k get pods
k get services
```
```yaml
# example manifest:
env:
- name: DRONES_COUNT
    value: ${DRONES_COUNT}
#
```

    

# Show containers envs:
```bash
kubectl exec dron1-7c984c46f6-tpvqv -- echo $DRONES_COUNT
kubectl exec dron1-7c984c46f6-tpvqv -- printenv
```