import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md border-b-4 border-orange-500">
      {/* Cố định chiều rộng 1200px */}
      <div className="w-[1200px] mx-auto h-20 flex items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="text-3xl font-black tracking-wider text-orange-500 hover:text-orange-400 transition-colors">
          🎮 Y8 CLONE
        </Link>
        
        {/* Menu chuyên mục giả */}
        <nav className="flex gap-8 font-bold text-slate-300">
          <Link href="/" className="hover:text-white hover:underline underline-offset-4 transition-all">
            NEW GAMES
          </Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-4 transition-all">
            ACTION
          </Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-4 transition-all">
            PUZZLE
          </Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-4 transition-all">
            MULTIPLAYER
          </Link>
        </nav>
      </div>
    </header>
  );
}