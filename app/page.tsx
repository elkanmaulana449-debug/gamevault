import Navbar from "./components/Navbar";
import prisma from "./lib/prisma";
import ConfirmForm from "./components/ConfirmForm";
import { hapusGame } from "./admin/action";

export default async function Home() {
  const games = await prisma.game.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">

      <Navbar />

      <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">

        <h1 className="mb-2 text-3xl font-bold">
          Koleksi Game
        </h1>

        <p className="mb-6 text-gray-600">
          Daftar game yang saya punya
        </p>

        <a
          href="/admin/tambah"
          className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Tambah Game
        </a>

        <div className="mt-6 overflow-x-auto rounded bg-white shadow">

          <table className="w-full">

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
              {games.map((game, index) => (
                <tr
                  key={game.id}
                  className="border-b text-center"
                >

                  {/* Nomor tampilan */}
                  <td className="p-3">
                    {index + 1}
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

                    <div className="flex justify-center gap-2">

                      {/* EDIT */}
                      <a
                        href={`/edit/${game.id}`}
                        className="w-20 rounded bg-yellow-500 px-3 py-2 text-center text-white hover:bg-yellow-600"
                      >
                        Edit
                      </a>

                      {/* HAPUS */}
                      <ConfirmForm
                        action={hapusGame}
                        message={`Yakin ingin menghapus ${game.nama_game}?`}
                      >
                        <input
                          type="hidden"
                          name="id"
                          value={game.id}
                        />

                        <button
                          type="submit"
                          className="w-20 rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                        >
                          Hapus
                        </button>
                      </ConfirmForm>

                    </div>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>

          {games.length === 0 && (
            <p className="p-6 text-center text-gray-500">
              Belum ada game.
            </p>
          )}

        </div>

      </div>

      <footer className="bg-gray-900 py-5 text-center text-white">
        <p>
          © 2026 GameVault. Dibuat untuk tugas Pemrograman Web.
        </p>
      </footer>

    </main>
  );
}