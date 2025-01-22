import React, { useEffect, useState } from "react";
import { MdPerson } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GameServer } from "@/app/types/GameServerType";

/**
 * A reusable mod component.
 */
const Mod = ({ mod }: { mod: string }) => (
  <span
    key={mod}
    className="rounded-xl mr-1 mb-1 inline-block bg-secondary border-accent border text-accent px-2 py-1"
  >
    {mod}
  </span>
);

const GameServerCard = (gameServer: GameServer) => {
  const [serverStatus, setServerStatus] = useState(gameServer.status);

  /**Change the server status if there is any update from JSON response */
  useEffect(() => {
    setServerStatus(gameServer.status);
  }, [gameServer.status]);

  return (
    <div>
      <div className="bg-primary border dark:border-0 shadow p-4 rounded-lg">
        <span
          className={`p-1 text-sm rounded capitalize transition-all duration-75 ${
            serverStatus === "online"
              ? "bg-success text-black"
              : "bg-alarm text-white"
          }`}
        >
          {serverStatus}
        </span>
        <div className="mt-2">
          <h3 className="text-2xl font-semibold">{gameServer.name}</h3>
          <p className="text-lg">
            {gameServer.game}{" "}
            <span className="bg-gray-600 p-1 rounded-xl text-xs text-white">
              v{gameServer.version}
            </span>
          </p>
        </div>
        <div className="mt-4">
          <p>
            <MdPerson className="inline -mt-1" /> {gameServer.players} players
            online
          </p>
          <p>
            <FaMapMarkerAlt className="inline -mt-1" /> {gameServer.region}
          </p>
        </div>
        <div className="mt-4">
          {/**Toggle button for changing server status */}
          <button
            onClick={() =>
              setServerStatus((serverStatus) =>
                serverStatus === "online" ? "offline" : "online"
              )
            }
            className={`p-1 rounded transition-all duration-100 delay-75 ${
              serverStatus === "online"
                ? "bg-alarm text-white hover:bg-alarm/75"
                : "bg-success text-black hover:bg-success/75"
            }`}
          >
            {serverStatus === "online" ? "Stop" : "Start"} Server
          </button>
          <div className="mt-4">
            {gameServer.mods.map((mod) => (
              <Mod key={mod} mod={mod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameServerCard;
