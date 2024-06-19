import { NextResponse, NextRequest } from "next/server";

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN
const HUBSPOT_ENDPOINT = `https://api.hubapi.com/crm/v3/objects/contacts?client_id${HUBSPOT_API_KEY}`;

export async function POST(request: NextRequest) {

  const requestJson = await request.json();
  try {
    const response = await fetch(HUBSPOT_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${HUBSPOT_TOKEN}`
      },
      body: JSON.stringify(requestJson),
    });
    const hubspotResponse = await response.json();
    return NextResponse.json(hubspotResponse);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
