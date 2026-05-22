import threading
import os
from flask import Flask
from livekit.agents import WorkerOptions, cli
from api import VoiceAssistant
from livekit.plugins import google
from livekit.agents import AgentSession, AutoSubscribe, JobContext, WorkerOptions, Worker
from dotenv import load_dotenv
import sys



load_dotenv()

app = Flask(__name__)



@app.route("/")
def health():
    return {"status": "voice assistant running"}, 200

def run_agent():
    sys.argv = ["agent.py", "start"]
    from agent import enterypoint  # import your entrypoint function
    cli.run_app(WorkerOptions(entrypoint_fnc=enterypoint))
    
# Start the LiveKit agent worker in a background thread
agent_thread = threading.Thread(target=run_agent, daemon=True)
agent_thread.start()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)