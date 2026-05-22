from dotenv import load_dotenv

from livekit.agents import Agent, AgentSession
from livekit.plugins import google

load_dotenv()


class VoiceAssistant(Agent):
    def __init__(self):
        super().__init__(
            instructions="""
            You are a helpful voice assistant.
            Speak naturally and keep responses short.
            """
        )








