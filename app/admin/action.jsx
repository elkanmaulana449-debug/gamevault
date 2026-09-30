"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function tambahGame(formData) {
  const nama_game = formData.get("nama_game");
  const genre = formData.get("genre");
  const platform = formData.get("platform");
  const rating = Number(formData.get("rating"));

  await prisma.game.create({
    data: {
      nama_game,
      genre,
      platform,
      rating,
    },
  });

  revalidatePath("/admin");
  redirect("/admin");
}

export async function editGame(formData) {
  const id = Number(formData.get("id"));
  const nama_game = formData.get("nama_game");
  const genre = formData.get("genre");
  const platform = formData.get("platform");
  const rating = Number(formData.get("rating"));

  await prisma.game.update({
    where: {
      id: id,
    },
    data: {
      nama_game: nama_game,
      genre: genre,
      platform: platform,
      rating: rating,
    },
  });

  revalidatePath("/admin");
  redirect("/admin");
}

export async function hapusGame(formData) {
  const id = Number(formData.get("id"));

  await prisma.game.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/admin");
}