import prisma from "../lib/prisma";
import ConfirmForm from "../components/ConfirmForm";
import { hapusGame } from "./action";

export default async function AdminPage() {
  const games = await prisma.game.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-2 text-3xl font-bold">
          Data Koleksi Game
        </h1>

        <p className="mb-6 text-gray-600">
          Kelola data game yang tersimpan di database.
        </p>

        <a
          href="/admin/tambah"
          className="mb-6 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          + Tambah Game
        </a>

        <div className="overflow-x-auto rounded bg-white shadow">

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
                      <div className="flex items-center justify-center gap-2">

                        <a
                          href={`/edit/${game.id}`}
                          className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                        >
                          Edit
                        </a>

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
                            className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
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
              Belum ada data game.
            </p>
          )}

        </div>

        <a
          href="/"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          ← Kembali ke Beranda
        </a>

      </div>
    </main>
  );
}