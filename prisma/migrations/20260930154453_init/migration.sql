-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "nama_game" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
