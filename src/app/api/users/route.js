import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const result = await prisma.user.findMany();

    if (!result) {
      return new NextResponse("not found", { status: 404 });
    }
    return NextResponse.json({ users: result || [] });
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
