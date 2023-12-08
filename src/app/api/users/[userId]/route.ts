import { NextResponse } from "next/server";

interface Params {
  params: {
    userId: number;
  };
}

export function GET(request: Object, { params }: Params) {
  return NextResponse.json({ sda: "GET world" });
}
