import { NextResponse } from 'next/server';
import { deleteTicket } from '../../../server/mongodb/actions/deleteTicket';

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const ticketId = searchParams.get('ticketId');

    if (!ticketId) {
      return NextResponse.json({ message: "Ticket ID is required" }, { status: 400 });
    }

    const result = await deleteTicket(ticketId);

    if (result === true) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else if (result === "Not Found") {
      return NextResponse.json({ message: "Ticket Not Found" }, { status: 400 });
    } else {
      return NextResponse.json({ message: "Failed" }, { status: 500 });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}