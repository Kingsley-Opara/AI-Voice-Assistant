import threading
import os
import sys
from flask import Flask
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.route("/")
def health():
    return {"status": "voice assistant running"}, 200

def run_flask():
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)

# Flask runs in background thread on Render's assigned PORT
flask_thread = threading.Thread(target=run_flask, daemon=True)
flask_thread.start()

# Give Flask a moment to start
import time
time.sleep(2)

# Tell LiveKit agent to use a different internal port (away from Flask)
sys.argv = ["agent.py", "start", "--port", "8082"]

from livekit.agents import WorkerOptions, cli
from agent import enterypoint

cli.run_app(WorkerOptions(entrypoint_fnc=enterypoint))