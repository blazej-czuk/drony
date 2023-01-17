1. Run Kiali
    kubectl port-forward svc/kiali -n istio-system 20001

# Route to ingress gateway
sudo ip route add 10.98.55.0/24 via 10.0.0.11 dev vboxnet0

http://kube.home/dron4/
curl http://kube.home/dron4/siemka
curl http://kube.home/dron3/version

http://kube.home/dron4/ping-me  ##  działa tylko wewnątrz sieci.



# Uruchomienie komunikacji
watch curl kube.home/dron1/siemka
watch curl kube.home/dron3/siemka



# Polityki wewnątrz
kubectl exec dron3-5f74bf9976-knjcl -- curl http://dron1:3000/siemka



# Replikacja dronów
https://www.youtube.com/watch?v=I4L2aR80_nQ

k scale --replicas=3 deployment dron4
watch -x kubectl get pods



k scale --replicas=1 deployment dron4

# Zmiana konfiguracji komunikacji między dronami
    k apply -f vs-drony.yaml
