import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      {/* Cố định chiều rộng 1200px vì không làm responsive */}
      <div className="w-[1200px] mx-auto h-16 flex items-center px-4">
        <Link href="/" className="text-2xl font-bold tracking-wider text-orange-500">
          🎮 WEB GAMES Y8
        </Link>
      </div>
    </header>
  );
}