import prisma from "../../lib/prisma";
import { editGame } from "../../admin/action";
import { notFound } from "next/navigation";

export default async function EditGame({ params }) {
  const { id } = await params;

  const game = await prisma.game.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-md">

        <h1 className="mb-2 text-3xl font-bold">
          Edit Game
        </h1>

        <p className="mb-6 text-gray-600">
          Ubah data game yang sudah tersimpan.
        </p>

        <form
          action={editGame}
          className="rounded bg-white p-6 shadow"
        >

          {/* ID game */}
          <input
            type="hidden"
            name="id"
            value={game.id}
          />

          {/* Nama Game */}
          <label className="block font-medium">
            Nama Game
          </label>

          <input
            type="text"
            name="nama_game"
            defaultValue={game.nama_game}
            required
            className="mb-4 mt-2 w-full rounded border p-2"
          />

          {/* Genre */}
          <label className="block font-medium">
            Genre
          </label>

          <input
            type="text"
            name="genre"
            defaultValue={game.genre}
            required
            className="mb-4 mt-2 w-full rounded border p-2"
          />

          {/* Platform */}
          <label className="block font-medium">
            Platform
          </label>

          <select
            name="platform"
            defaultValue={game.platform}
            required
            className="mb-4 mt-2 w-full rounded border p-2"
          >
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
          </select>

          {/* Rating */}
          <label className="block font-medium">
            Rating
          </label>

          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            defaultValue={game.rating}
            required
            className="mb-6 mt-2 w-full rounded border p-2"
          />

          <button
            type="submit"
            className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
          >
            Simpan Perubahan
          </button>

        </form>

        <a
          href="/admin"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          ← Kembali ke Admin
        </a>

      </div>

    </main>
  );
}