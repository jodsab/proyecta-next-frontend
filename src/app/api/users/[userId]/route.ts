import { NextResponse } from "next/server";

interface Params {
  params: {
    userId: number;
  };
}

export function GET(request: Object, { params }: Params) {
  console.log(params);
  return NextResponse.json({ sda: "GET world" });
}
