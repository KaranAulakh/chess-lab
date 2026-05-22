# Use modern, stable Python
FROM python:3.12-slim

# Set work directory
WORKDIR /app

# Download Stockfish Engine for bot / analysis
RUN apt-get update \
  && apt-get install -y --no-install-recommends stockfish \
  && rm -rf /var/lib/apt/lists/*

ENV STOCKFISH_PATH=/usr/games/stockfish

# Install dependencies first (cached layer)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend source code
COPY . .

# Set Python path so imports work correctly
ENV PYTHONPATH=/app/src

# Expose port (Railway/Docker will map this)
EXPOSE 5000

# Run using Gunicorn (production server)
# Note: run from /app/src since main.py is there
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--chdir", "src", "main:app"]

