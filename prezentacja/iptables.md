```bash
# Sprawdzenie PID drona3 z użyciem narzędzia crictl.
crictl inspect $(crictl ps | grep dron3 | grep server | cut -d" " -f1) | grep pid
crictl inspect $(crictl ps | grep dron3 | grep istio-proxy | cut -d" " -f1) | grep pid
crictl inspect $(crictl ps | grep dron2 | cut -d" " -f1) | grep pid

# Podłaczenie się do przestrzeni kontenera.
nsenter -n --target 2737
nsenter -n --target 2821
nsenter -n --target 3012
# Sprawdzenie wszystkich reguł iptables.
iptables -t nat -L -v

```