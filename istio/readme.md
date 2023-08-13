
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


```bash
# dron1 decode cert
istioctl proxy-config all dron1-67f7659544-wztvh -o json | jq ".configs[5].dynamic_active_secrets[0].secret.tls_certificate.certificate_chain.inline_bytes" | sed -e 's/\\n/\n/g' -e 's/^"//' -e 's/"$//' | base64 -d | openssl x509 -noout -text

# dron2 decode cert
istioctl proxy-config all dron2-5d47966b5f-g89wl -o json | jq ".configs[5].dynamic_active_secrets[0].secret.tls_certificate.certificate_chain.inline_bytes" | sed -e 's/\\n/\n/g' -e 's/^"//' -e 's/"$//' | base64 -d | openssl x509 -noout -text


# trusted_ca
istioctl proxy-config all dron1-67f7659544-wztvh -o json | jq ".configs[5].dynamic_active_secrets[1].secret.validation_context.trusted_ca.inline_bytes" | sed -e 's/\\n/\n/g' -e 's/^"//' -e 's/"$//' | base64 -d | openssl x509 -noout -text
```


```bash
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            36:68:28:a4:87:fb:4b:b8:d5:dd:77:b2:d9:48:6a:a8
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: O = cluster.local
        Validity
            Not Before: Nov 12 12:42:12 2022 GMT
            Not After : Nov  9 12:42:12 2032 GMT
        Subject: O = cluster.local
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                RSA Public-Key: (2048 bit)
                Modulus:
                    00:c9:59:91:0f:be:87:e8:1b:2b:f8:b5:0a:53:2b:
                    84:88:05:00:8f:07:23:8f:99:c3:e6:e7:ed:d6:c0:
                    09:fc:db:f4:54:68:34:dd:75:85:a0:ba:9e:c1:88:
                    ec:d6:0b:cf:f4:7b:4a:62:f9:c0:3d:bd:73:f0:d2:
                    33:30:62:07:3b:b7:3c:6f:67:2d:7f:91:36:2f:ab:
                    86:97:34:5a:ae:78:a5:9a:2e:b1:fe:81:3f:1f:39:
                    06:02:cb:bd:1c:e4:24:4c:02:41:f6:e9:5b:37:0b:
                    7c:40:ef:8d:62:7e:cd:00:ee:8c:34:58:40:e1:43:
                    11:75:82:94:14:d1:36:61:1f:28:22:99:95:bc:db:
                    66:fb:76:46:bc:86:62:0d:67:51:56:f1:fd:0f:52:
                    ca:a7:48:b6:29:20:23:4d:20:f4:32:c3:21:ee:3d:
                    f4:31:ca:ee:49:14:ae:13:9e:b2:0d:b6:b6:42:23:
                    62:60:e5:14:8d:0c:3d:63:26:86:b8:64:59:72:50:
                    29:0c:6f:ba:7b:29:12:ee:62:50:49:6c:e0:28:ce:
                    e8:41:e3:dc:f4:b8:32:9f:a1:70:5e:5c:90:d9:56:
                    d3:e8:8e:fb:5d:76:af:93:8d:f7:53:77:22:82:8f:
                    83:fb:56:f4:56:a3:34:1f:6c:33:aa:8b:ce:32:fc:
                    96:67
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Key Usage: critical
                Certificate Sign
            X509v3 Basic Constraints: critical
                CA:TRUE
            X509v3 Subject Key Identifier: 
                EA:C8:AF:52:E4:D7:BB:C8:F4:58:7B:F4:25:54:02:2B:B6:81:5B:0F
    Signature Algorithm: sha256WithRSAEncryption
         09:fc:30:9c:9a:d8:f6:d0:34:fb:4f:3e:d3:62:58:23:eb:54:
         9c:48:9a:1c:47:97:c3:94:43:2b:83:68:c9:f6:e9:fe:bf:09:
         96:a1:da:98:b1:a5:4c:eb:b7:13:6e:01:d1:72:62:9b:eb:3a:
         83:52:bd:7f:13:c8:28:2f:f7:19:9b:e1:57:6f:70:d7:41:91:
         73:d7:9c:0b:68:99:45:0a:8e:35:e1:23:66:1d:85:46:98:c5:
         89:50:8a:6e:5f:2c:a0:ce:1e:71:23:ee:c2:53:5a:6c:55:8f:
         d2:fc:52:7a:8e:6a:e7:9c:be:39:8b:9d:21:34:bf:33:91:81:
         f3:21:87:20:a0:a9:72:f1:c6:c3:a8:59:9b:67:54:41:46:9e:
         67:2b:cd:6f:c4:30:88:a6:ab:a6:bb:42:20:c8:cc:ae:d4:ef:
         7b:8d:75:b2:e8:38:bc:d0:b7:3d:c9:df:1c:a9:96:6f:99:9a:
         18:2c:6c:7b:63:8e:51:49:13:b1:32:f4:b5:ea:56:02:af:f1:
         f8:44:e0:3e:d1:1d:d5:06:dc:75:df:4d:46:4d:21:7d:e0:4e:
         75:0c:33:d1:53:f0:7c:7f:1a:ed:de:d0:bc:b6:e5:a1:01:16:
         86:f4:bf:19:d4:99:5e:4e:ab:6d:ca:6f:3d:49:a0:3f:37:32:
         15:92:cb:c7
```