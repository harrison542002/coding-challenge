"use client";
import GameServerCard from "@/app/components/GameServerCard";
import ModeToggler from "@/app/components/ModeToggler";
import { GameServer } from "@/app/types/GameServerType";
import { useEffect, useState } from "react";

/*
  Welcome to the simplegamehosting coding assignment!

  if you got this far great job! 🎉
  Now it's your turn to shine! 🌟
  
  The mock data is fetched from the server and displayed on the page.

  Your task is to create a dynamic card component for each server in the list.
  - The card should display the server's name, game, players, status, version etc, bonus points for displaying any extra data from the json response.
  - please use tailwind to style your components, you can use the existing styles in this file as a reference.
  - You can also use any other libraries you like to help you build the UI.
  
  for extra info please read the README.md file in the root of the project.
*/

export default function Home() {
  const [serverData, setServerData] = useState<null | GameServer[]>(null);
  // you can update this fetching code if required but it's not necessary for the assignment.
  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="mx-[5px] md:mx-[8px] lg:mx-[52px] mt-4">
      <div className="flex justify-end w-full">
        <ModeToggler />
      </div>
      <h1 className="text-4xl font-bold text-center">Minecraft Servers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        {/**Server Card List */}
        {serverData ? (
          serverData.map((gameServer) => (
            <GameServerCard key={gameServer.id} {...gameServer} />
          ))
        ) : (
          <>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
            <div className="w-full h-[220px] dark:bg-gray-900 bg-gray-100 animate-pulse rounded-lg"></div>
          </>
        )}
      </div>
    </div>
  );
}
