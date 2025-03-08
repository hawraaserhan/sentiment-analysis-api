FROM python:3.11.9-slim

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir Flask vaderSentiment requests

EXPOSE 5000

ENV FLASK_APP=flask-api.py
ENV FLASK_RUN_HOST=0.0.0.0

CMD ["python", "flask-api.py"]
