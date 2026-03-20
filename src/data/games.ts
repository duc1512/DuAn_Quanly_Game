export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  gameUrl: string;
}

export const games: Game[] = [
  {
    id: "1",
    title: "Space Invaders Retro",
    thumbnail: "https://picsum.photos/seed/game1/300/200",
    gameUrl: "https://example.com" 
  },
  {
    id: "2",
    title: "Tetris Classic",
    thumbnail: "https://picsum.photos/seed/game2/300/200",
    gameUrl: "https://example.com"
  },
  {
    id: "3",
    title: "Pac-Man Arcade",
    thumbnail: "https://picsum.photos/seed/game3/300/200",
    gameUrl: "https://example.com"
  },
  {
    id: "4",
    title: "Racing Xtreme",
    thumbnail: "https://picsum.photos/seed/game4/300/200",
    gameUrl: "https://example.com"
  },
  {
    id: "5",
    title: "Zombie Shooter",
    thumbnail: "https://picsum.photos/seed/game5/300/200",
    gameUrl: "https://example.com"
  },
  {
    id: "6",
    title: "Puzzle Quest",
    thumbnail: "https://picsum.photos/seed/game6/300/200",
    gameUrl: "https://example.com"
  },
  {
    id: "7",
    title: "Tower Defense",
    thumbnail: "https://picsum.photos/seed/game7/300/200",
    gameUrl: "https://example.com"
  },
  {
    id: "8",
    title: "Platformer Jump",
    thumbnail: "https://picsum.photos/seed/game8/300/200",
    gameUrl: "https://example.com"
  }
];