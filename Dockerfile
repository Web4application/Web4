FROM python:3.11-slim

# Install CMake and build tools
RUN apt-get update && apt-get install -y cmake build-essential

WORKDIR /app
COPY requirements.txt .
RUN pip install pypdf flask  # Flask for the web app

COPY . .

# Run CMake helper to standardize PDFs before starting
RUN cmake . && cmake --build .

EXPOSE 5000
CMD ["python", "app.py"]
