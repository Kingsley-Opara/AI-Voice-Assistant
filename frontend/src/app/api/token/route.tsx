import { NextRequest, NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const room = searchParams.get('room') ?? 'voice-room';
  const username = searchParams.get('username') ?? `user-${Date.now()}`;

  if (!process.env.LIVEKIT_API_KEY || !process.env.LIVEKIT_API_SECRET) {
    return NextResponse.json({ error: 'LiveKit credentials not configured' }, { status: 500 });
  }

  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,
    { identity: username }
  );

  token.addGrant({
    roomJoin: true,
    room,
    canPublish: true,      // user can send mic audio
    canSubscribe: true,    // user can hear agent audio
  });

  return NextResponse.json({ token: await token.toJwt(), url: process.env.LIVEKIT_URL });
}