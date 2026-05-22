from livekit import api
from dotenv import load_dotenv
import os

load_dotenv()

def create_token():
    token = api.AccessToken(
        os.getenv("LIVEKIT_API_KEY"),
        os.getenv("LIVEKIT_API_SECRET")
    )

    token = (
        token.with_identity("user1")
        .with_name("User 1")
        .with_grants(
            api.VideoGrants(
                room_join=True,
                room="test-room"
            )
        )
    )

    return token.to_jwt()


if __name__ == "__main__":
    print(create_token())