import { NextRequest, NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
import { sendEmail } from "@/utils/mailer";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  //@ts-ignore
  const reqBody = await req.json();
  const { content, emails } = reqBody;

  try {
    console.log("Content", content);
    console.log("Emails", emails);

    const user = await Promise.allSettled(
      emails.map(async (email: any) => {
        sendEmail({ email, content });
        await prisma.user.create({
          data: { email },
        });
      })
    );

    return NextResponse.json({
      message: "Successfull",
      content: content,
      emailList: emails,
      user: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
