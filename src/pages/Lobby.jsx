import useSocket from "@/hooks/useSocket";
import React, { useState, useCallback } from "react";

const LobbyScreen = () => {

    const socket=useSocket()
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
     socket.emit(roomName)
    },
    [email, room,socket]
  );
 
  return (
    <div>
      <h1>Lobby Screen</h1>
      <form action="" onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room Id</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />{" "}
        <br />
        <button>Join</button>
      </form>
    </div>
  );
};

export default LobbyScreen;
