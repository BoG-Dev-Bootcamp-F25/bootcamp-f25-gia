import connectDB from "../index";
import Ticket from "../models/Ticket";

export async function deleteTicket(ticketId: string) {
  await connectDB();

  try {
    const deletedTicket = await Ticket.findByIdAndDelete(ticketId);

    if (deletedTicket) {
      return true;
    } else {
      return "Not Found";
    }
  } catch (error) {
    console.error("Error deleting ticket:", error);
    return false;
  }
}