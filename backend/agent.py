from __future__ import annotations
from livekit.agents import (
    AutoSubscribe,
    JobContext,
    WorkerOptions,
    cli,
    AgentSession
)
from livekit.plugins import google
from dotenv import load_dotenv
import os
from api import VoiceAssistant
from google.genai.types import Modality


async def enterypoint(ctx: JobContext):
    await ctx.connect(auto_subscribe=AutoSubscribe.SUBSCRIBE_ALL)
    await ctx.wait_for_participant()
    

    model = google.realtime.RealtimeModel(
        model="gemini-2.5-flash-native-audio-preview-12-2025",
        voice="Puck",
        temperature=0.7,
        # No modalities override needed — native audio handles this internally
    )

    session = AgentSession(
        llm=model,
    )

    await session.start(room=ctx.room, agent=VoiceAssistant())


if __name__ == "__main__":
    load_dotenv()
    cli.run_app(WorkerOptions(entrypoint_fnc= enterypoint))
    