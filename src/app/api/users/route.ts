import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ sda: "GET world" });
}

export function POST() {
  return NextResponse.json({ sda: "POST world" });
}

export function PUT() {
  return NextResponse.json({ sda: "PUT world" });
}

export function DELETE() {
  return NextResponse.json({ sda: "DELETE world" });
}
