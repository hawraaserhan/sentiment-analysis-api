# sentiment-analysis-api
# Build and Start the Containers:

# Open a terminal in the project-root directory and run:
```bash
docker-compose up --build

```
This command builds the images for both services (if not already built) and starts the containers.
# Stopping the Containers:

To stop the running containers, press Ctrl+C in the terminal. To remove the containers (and free up network resources), run:
```bash
docker-compose down

```
# How to Run the Express.js Server

## Initialize the Node.js project:
```bash
cd express-server
npm init -y
```

## Install dependencies:
```bash
npm install express axios
```

## Start the server:
```bash
node server.js
```

This starts the Express.js API at [http://127.0.0.1:3000](http://127.0.0.1:3000).




# How to Run the Flask API

## Install dependencies:
```bash
pip install flask vaderSentiment
```

## Start the Flask API:
```bash
python flask.py

```

This starts the API at [http://127.0.0.1:5000]](http://127.0.0.1:5000).

