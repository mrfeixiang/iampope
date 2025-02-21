@echo off
echo Starting local server, please wait...

:: Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Python is not installed or not added to PATH. Please install Python 3 and ensure it is added to the system PATH.
    echo Installation link: https://www.python.org/downloads/
    pause
    exit /b 1
)

:: Kill any process occupying port 8000
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8000') do (
    taskkill /f /pid %%a >nul 2>&1
    echo Released port 8000 (PID: %%a)
)

:: Start the Python local server with IPv4 explicitly
start "" http://127.0.0.1:8000
python -m http.server 8000 --bind 127.0.0.1

echo If the browser does not open automatically, please manually visit http://127.0.0.1:8000
pause