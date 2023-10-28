import prisma from "../../../app/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("okkkkkk");
  const body = await request.json();
  const { name, email, password } = body;

  console.log(body, "bodyyyy");
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    console.log(user, "user");
    return NextResponse.json(user);
  } catch (err: unknown) {
    console.log(err);

    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    );
  }
}
