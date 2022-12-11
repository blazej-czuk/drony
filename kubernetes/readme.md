# Deploy to kubernetes
```bash
export DRONES_COUNT=4
k apply -f kubernetes/service.yaml -f kubernetes/deployment.yaml
export POD_NAME=$(kubectl get pods --namespace default -o jsonpath="{.items[0].metadata.name}")
export SVC_NAME=$(kubectl get svc --namespace default -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward svc/$SVC_NAME 8080
kubectl exec $POD_NAME -- echo $DRONES_COUNT

```

# ConfigMaps
```bash
https://www.aquasec.com/cloud-native-academy/kubernetes-101/kubernetes-configmap/
kubectl get configmaps special-config -o yaml

```
```yaml
# example manifest:
apiVersion: v1
kind: ConfigMap
metadata:
  name: special-config
  namespace: default
data:
  DRONES_NUMBER: "4"
#
```

    

# Show containers envs:
```bash
kubectl exec dron1-7c984c46f6-tpvqv -- echo $DRONES_COUNT
kubectl exec dron1-7c984c46f6-tpvqv -- printenv
```