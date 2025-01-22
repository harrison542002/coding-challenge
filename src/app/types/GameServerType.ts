/**
 * Type for game server from JSON response
 */
export type GameServer = {
  id: number;
  name: string;
  game: string;
  players: string;
  status: string;
  version: string;
  type: string;
  region: string;
  mods: string[];
};
