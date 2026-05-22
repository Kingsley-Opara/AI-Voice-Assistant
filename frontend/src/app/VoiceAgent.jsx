'use client';

import { useState, useCallback } from 'react';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  useVoiceAssistant,
  BarVisualizer,
  VoiceAssistantControlBar,
  AgentState,
} from '@livekit/components-react';
import '@livekit/components-styles';

export default function Home() {
  const [token, setToken] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const connect = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/token?room=voice-room&username=user-${Date.now()}`);
      const data = await res.json();
      setToken(data.token);
      setUrl(data.url);
    } catch (e) {
      console.error('Failed to get token', e);
    } finally {
      setLoading(false);
    }
  }, []);

  if (!token || !url) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white">Voice Assistant</h1>
          <p className="text-gray-400">Click below to start a conversation</p>
          <button
            onClick={connect}
            disabled={loading}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white rounded-2xl text-lg font-semibold transition-colors"
          >
            {loading ? 'Connecting...' : 'Start Conversation'}
          </button>
        </div>
      </main>
    );
  }

  return (
    <LiveKitRoom
      token={token}
      serverUrl={url}
      connect={true}
      audio={true}
      video={false}
      onDisconnected={() => { setToken(null); setUrl(null); }}
      className="flex min-h-screen flex-col items-center justify-center bg-gray-950"
    >
      <VoiceUI />
      <RoomAudioRenderer />  {/* plays agent audio through speakers */}
    </LiveKitRoom>
  );
}

function VoiceUI() {
  const { state, audioTrack } = useVoiceAssistant();

   

    // After — works fine
    const stateLabel = {
        disconnected: 'Disconnected',
        connecting: 'Connecting...',
        initializing: 'Initializing...',
        listening: '🎤 Listening',
        thinking: '🧠 Thinking...',
        speaking: '🔊 Speaking',
    };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-3xl font-bold text-white">Voice Assistant</h1>

      {/* Audio visualizer — animates when agent speaks */}
      <div className="w-64 h-32">
        <BarVisualizer
          state={state}
          trackRef={audioTrack}
          barCount={20}
          className="w-full h-full"
        />
      </div>

      {/* Current state label */}
      <p className="text-gray-300 text-lg">{stateLabel[state] ?? state}</p>

      {/* Mic toggle + disconnect button */}
      <VoiceAssistantControlBar />
    </div>
  );
}