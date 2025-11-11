import { NextResponse } from 'next/server';
import { readTicketsByUser } from '../../../server/mongodb/actions/readTicketsByUser';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const tickets = await readTicketsByUser(userId);

    if (tickets === "User Not Found") {
      return NextResponse.json({ message: "User Not Found" }, { status: 400 });
    } else if (tickets === false) {
      return NextResponse.json({ message: "Failed" }, { status: 500 });
    } else {
      return NextResponse.json(tickets, { status: 200 });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}