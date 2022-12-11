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