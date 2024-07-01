@echo off
echo "Running Flask Application"
start cmd /k python ./app.py
echo "Opening Application"
start https://victoriousmango.github.io/Front-End/
echo "Running Ngrok"
set NGROK_SKIP_BROWSER_WARNING=true
start cmd /k docker run -it -e NGROK_SKIP_BROWSER_WARNING=true -e NGROK_AUTHTOKEN=2heU4OaJb4j2d5jeXW452AhgIyC_243fx3S9iwmNNyLir41MH ngrok/ngrok:latest http host.docker.internal:5000
