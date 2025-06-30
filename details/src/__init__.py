from flask import Flask

app = Flask(__name__)

from .app import *  # Import routes from app.py to initialize the Flask app