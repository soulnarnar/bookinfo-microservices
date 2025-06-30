FROM python:3.11-slim

WORKDIR /usr/src/app

# Install distutils
RUN apt-get update && apt-get install -y python3-distutils

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ .

EXPOSE 3000

CMD ["python", "app.py"]