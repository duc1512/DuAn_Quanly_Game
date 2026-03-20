import Link from "next/link";
import { Game } from "../data/games";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
      {/* Thumbnail */}
      <img 
        src={game.thumbnail} 
        alt={game.title} 
        className="w-full h-[180px] object-cover bg-slate-100"
      />
      
      {/* Thông tin */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-800 mb-4">{game.title}</h3>
        
        <Link 
          href={`/game/${game.id}`}
          className="mt-auto block text-center bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition-colors"
        >
          PLAY NOW
        </Link>
      </div>
    </div>
  );
}