# Sidecar injection
```bash
# Wstrzyknięcie sidecar envoy do kazdego poda w default namespace.
kubectl label namespace default istio-injection=enabled --overwrite
```

