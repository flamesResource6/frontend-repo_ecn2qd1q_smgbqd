import { Menu, Wallet } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#00e5cc] to-[#ff006e] grid place-items-center shadow-sm">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00e5cc] to-[#ff006e]">
            Dhanvam
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#advisory" className="hover:text-gray-900 transition-colors">Advisory</a>
          <a href="#audience" className="hover:text-gray-900 transition-colors">Who it’s for</a>
          <a href="#cta" className="hover:text-gray-900 transition-colors">Get started</a>
        </nav>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-gray-700 hover:bg-gray-50">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
