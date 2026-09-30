import Navbar from "./components/Navbar";
import prisma from "./lib/prisma";

export default async function Home() {
  const games = await prisma.game.findMany();

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Isi Halaman */}
      <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">

        <h1 className="mb-2 text-3xl font-bold">
          Koleksi Game
        </h1>

        <p className="mb-6 text-gray-600">
          Daftar game yang saya punya
        </p>

        {/* Tombol Tambah */}
        <a
          href="/admin/tambah"
          className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Tambah Game
        </a>

        {/* Tabel */}
        <table className="mt-6 w-full bg-white shadow">

          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">No</th>
              <th className="p-3">Nama Game</th>
              <th className="p-3">Genre</th>
              <th className="p-3">Platform</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {games.map((game) => (
              <tr
                key={game.id}
                className="border-b text-center"
              >

                <td className="p-3">
                  {game.id}
                </td>

                <td className="p-3">
                  {game.nama_game}
                </td>

                <td className="p-3">
                  {game.genre}
                </td>

                <td className="p-3">
                  {game.platform}
                </td>

                <td className="p-3">
                  {game.rating}
                </td>

                <td className="p-3">

                  <a
                    href={`/edit/${game.id}`}
                    className="mr-2 rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                  >
                    Edit
                  </a>

                  <button
                    className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  >
                    Hapus
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

        {/* Kalau database masih kosong */}
        {games.length === 0 && (
          <p className="mt-6 text-center text-gray-500">
            Belum ada game.
          </p>
        )}

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-5 text-center text-white">
        <p>
          © 2026 GameVault. Dibuat untuk tugas Pemrograman Web.
        </p>
      </footer>

    </main>
  );
}