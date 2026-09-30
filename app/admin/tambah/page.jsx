import { tambahGame } from "../action";

export default function TambahGame() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-md">

        <h1 className="mb-2 text-3xl font-bold">
          Tambah Game
        </h1>

        <p className="mb-6 text-gray-600">
          Tambahkan game baru ke koleksi.
        </p>

        <form
          action={tambahGame}
          className="rounded bg-white p-6 shadow"
        >

          <label className="block font-medium">
            Nama Game
          </label>

          <input
            type="text"
            name="nama_game"
            required
            className="mb-4 mt-2 w-full rounded border p-2"
          />

          <label className="block font-medium">
            Genre
          </label>

          <input
            type="text"
            name="genre"
            required
            className="mb-4 mt-2 w-full rounded border p-2"
          />

          <label className="block font-medium">
            Platform
          </label>

          <select
            name="platform"
            required
            className="mb-4 mt-2 w-full rounded border p-2"
          >
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
          </select>

          <label className="block font-medium">
            Rating
          </label>

          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            required
            className="mb-6 mt-2 w-full rounded border p-2"
          />

          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Simpan
          </button>

        </form>

      </div>

    </main>
  );
}