import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("hero-images", "max");

  return NextResponse.json({ revalidated: true });
}
