import { games } from "@/data/games";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function GamePage({ params }: { params: { id: string } }) {
  const game = games.find((g) => g.id === params.id);

  if (!game) {
    notFound();
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-800">{game.title}</h1>
        <Link 
          href="/" 
          className="bg-slate-200 text-slate-700 px-4 py-2 rounded font-medium hover:bg-slate-300 transition-colors"
        >
          &larr; Quay lại
        </Link>
      </div>

      {/* Khung chơi game (Iframe) */}
      <div className="w-full h-[600px] bg-black rounded overflow-hidden">
        <iframe
          src={game.gameUrl}
          title={game.title}
          className="w-full h-full border-none"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="mt-6 text-slate-600">
        <p>Đang chơi: <strong>{game.title}</strong>. Chúc bạn chơi game vui vẻ!</p>
      </div>
    </div>
  );
}