import connectDB from "../index";
import Ticket from "../models/Ticket";

export async function createTicket(data: { lineColor: string, station: string, userId: string }) {
  await connectDB();

  try {
    await Ticket.create(data);
    return true;
  } catch (error) {
    console.error("Error creating ticket:", error);
    return false;
  }
}