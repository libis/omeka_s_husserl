@ECHO OFF
docker build . -t omeka_s_husserl
docker tag omeka_s_husserl registry.docker.libis.be/omeka_s_husserl
docker push registry.docker.libis.be/omeka_s_husserl
ECHO Image built, tagged and pushed succesfully
PAUSE
