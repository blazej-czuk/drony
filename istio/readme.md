
# Route to ingress gateway
sudo ip route add 10.98.55.0/24 via 10.0.0.11 dev vboxnet0

# Show poxy config

istioctl proxy-config cluster dron1-5c764cb5d-5x9g

istioctl proxy-config route dron1-5c764cb5d-5x9g

istioctl proxy-config listener dron1-5c764cb5d-5x9g2

istioctl proxy-config endpoint dron1-5c764cb5d-5x9g2

https://istio.io/latest/docs/reference/config/networking/virtual-service/

https://www.youtube.com/watch?v=772ueauO8yk&list=PLI4xy7phW54nbfjf7ZMnlEx1O5cHneigh&index=3&ab_channel=Cloud-DeepTech


https://www.youtube.com/watch?v=XdfMTfGRkWw&list=PLI4xy7phW54nbfjf7ZMnlEx1O5cHneigh&index=4&ab_channel=Cloud-DeepTech


# Retrive information about configuration 

i proxy-status

i proxy-config all dron1-5d4ddb44d6-g2fzr


# Delivery configuration
kubectl apply -f /home/bczu/Desktop/Studia/SEMESTR3/drony/istio/virtal-service-dron1.yaml

# Delete configuration
kubectl delete -f /home/bczu/Desktop/Studia/SEMESTR3/drony/istio/virtal-service-dron1.yaml