import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  //@ts-ignore
  const { content, emails } = await req.body();

  try {
    console.log("Content", content);
    console.log("Emails", emails);
  } catch (error) {
    return res.status(405).json({ error: "Error occured" });
  }
}
