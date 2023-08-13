```bash
# Sprawdzenie PID drona3 z użyciem narzędzia crictl.
crictl inspect $(crictl ps | grep dron3 | grep istio-proxy | cut -d" " -f1) | grep pid

# Podłaczenie się do przestrzeni kontenera.
nsenter -n --target pid

# Sprawdzenie wszystkich reguł iptables.
iptables-legacy -t nat -L -v
```

