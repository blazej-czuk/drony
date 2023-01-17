# drony


docker build -t blazejczuk/drony:headers .
docker push blazejczuk/drony:headers


INFO
Wersja 0.7 jest bez automatycznego pingowania

# Secure docker login
```bash
gpg --generate-key
pass init "Błażej Czuk <blazej.czuk@outlook.com>"
docker login    
```