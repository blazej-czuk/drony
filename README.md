# drony


docker build -t blazejczuk/drony:headers-v2 .
docker push blazejczuk/drony:headers-v2


INFO
Wersja 0.7 jest bez automatycznego pingowania

# Secure docker login
```bash
gpg --generate-key
pass init "Błażej Czuk <blazej.czuk@outlook.com>"
docker login    
```