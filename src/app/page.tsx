import { games } from "@/data/games";
import GameCard from "@/components/GameCard";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold mb-8 border-b-2 border-slate-200 pb-2">
        Mới Cập Nhật
      </h1>
      
      {/* Grid cố định 4 cột */}
      <div className="grid grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}