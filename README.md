# drony


docker build -t blazejczuk/drony:0.1 .
docker push blazejczuk/drony:0.1


# Deploy to kubernetes
```bash
k apply -f kubernetes/drones.yaml
export POD_NAME=$(kubectl get pods --namespace default -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward $POD_NAME 3002:3001

```

# Parametryzowany deploy
```bash

export DRONES_COUNT="4"
```
```yaml
# example manifest:
env:
- name: DRONES_COUNT
    value: ${DRONES_COUNT}
#
```

    k apply -f kubernetes/drones.yaml
    envsubst < kubernetes/drones.yaml | kubectl apply -f -


# Install Helm
```bash
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
```

# Create first Helm Chart
```bash
helm create dronchart
rm -rf dronchart/templates/*
kubectl create deployment dron --image=blazejczuk/drony:0.3 --dry-run=client -o yaml >> templates/deployment.yaml

# Expose :
kubectl expose deploy blazejczuk/drony:0.3 --port 3001 --type NodePort --dry-run=client -o yaml > /tmp/service.yaml

```

# Get the application URL by running these commands:
```bash
export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=dronchart,app.kubernetes.io/instance=dronachart" -o jsonpath="{.items[0].metadata.name}")
export CONTAINER_PORT=$(kubectl get pod --namespace default $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
echo "Visit http://127.0.0.1:3001 to use your application"
kubectl --namespace default port-forward $POD_NAME 8080:$CONTAINER_PORT
```
# Show containers envs:
```bash
kubectl exec dron1-7c984c46f6-tpvqv -- echo $DRONES_COUNT
kubectl exec dron1-7c984c46f6-tpvqv -- printenv
```

# Run Kubernetes Dashboard
```bash
kubectl proxy

# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login

# TOKEN (Please not publish production token): eyJhbGciOiJSUzI1NiIsImtpZCI6IjJlcG5HMEUzSkZyTUEzZ0NDMjVXVHFPTks1Q3otNzNBWThuOVQtS1YxNnMifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLXRra256Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI0ODNlNTlmZC1lY2E5LTRlOTktOTc0YS0xOWZkNWQ0ZWU2YTAiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.I5cWneKK37ormv3WW4VH_CPYgKGNhEMzyYX_nLP-eZSI8PpTgtdFp36eUuIwU2NTMyHHyowusAytgYxXfMnO05QrPhjbnthQdrXtG0x0ziNsfyC1GxG5HjU_ZeVbU_8FL3Ff14HiA5ELakstmi76ZlmpG2lIvux9NLy03tpyK6HmXIB_hEIplk9pHZ6bf0sdAgdNlv3hoaTtESk6DXzZglFJ3NFSxwqzEKsk8AmLVdyu8lVKJK8gkWyycsu_R7qyuCDCN8wR8EchKskhay_lyIYgtR3eKyO98FsZtRqIlQCiVnhAB9IjOvXLN5aCfSWpm8xPbl1LiKUke-uFzJFjoQ
```


# Run Kiali
```bash
kubectl port-forward svc/kiali -n istio-system 20001
# http://127.0.0.1:20001/kiali
```

# Run grafana
```bash
kubectl port-forward svc/grafana -n istio-system 3000

# Monitoring obciążenie usług

# http://127.0.0.1:3000/d/LJ_uJAvmk/istio-service-dashboard?orgId=1&refresh=1m

# 