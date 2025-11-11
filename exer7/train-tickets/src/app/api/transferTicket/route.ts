import { NextResponse } from 'next/server';
import { updateTicketByUser } from '../../../server/mongodb/actions/updateTicketByUser';

export async function PATCH(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const ticketId = searchParams.get('ticketId');

    const body = await request.json();
    const { newUserId } = body;

    if (!ticketId || !newUserId) {
      return NextResponse.json({ message: "Ticket ID and New User ID are required" }, { status: 400 });
    }

    const result = await updateTicketByUser(ticketId, newUserId);

    if (result === true) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else if (result === "User Not Found") {
      return NextResponse.json({ message: "New User Not Found" }, { status: 400 });
    } else if (result === "Ticket Not Found") {
      return NextResponse.json({ message: "Ticket Not Found" }, { status: 400 });
    } else {
      return NextResponse.json({ message: "Failed" }, { status: 500 });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}