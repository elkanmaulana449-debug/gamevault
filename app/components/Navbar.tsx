export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <a
          href="/"
          className="text-3xl font-bold"
        >
          GameVault
        </a>

        <div className="flex gap-8 text-lg">

          <a
            href="/"
            className="hover:text-gray-300"
          >
            Beranda
          </a>

          <a
            href="/admin/tambah"
            className="hover:text-gray-300"
          >
            Tambah Game
          </a>

          <a
            href="#"
            className="hover:text-gray-300"
          >
            Tentang
          </a>

        </div>

      </div>
    </nav>
  );
}