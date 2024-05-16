import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Works!" })
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log('dsadsa', data)
}