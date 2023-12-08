import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ sda: "GET world" });
}

export async function POST(request) {
  const data = await request.json();


}


export function PUT() {
  return NextResponse.json({ sda: "PUT world" });
}

export function DELETE() {
  return NextResponse.json({ sda: "DELETE world" });
}
