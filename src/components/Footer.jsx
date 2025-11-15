export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} Dhanvam. All rights reserved.</p>
          <div className="text-sm text-gray-400">Built with care to empower financial wellness.</div>
        </div>
      </div>
    </footer>
  );
}
