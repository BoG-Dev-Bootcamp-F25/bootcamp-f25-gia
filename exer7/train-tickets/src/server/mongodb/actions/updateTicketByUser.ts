import connectDB from "../index";
import Ticket from "../models/Ticket";
import User from "../models/User";

export async function updateTicketByUser(ticketId: string, newUserId: string) {
  await connectDB();

  try {
    const user = await User.findById(newUserId);
    if (!user) {
      return "User Not Found";
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(
      ticketId,
      { userId: newUserId },
      { new: true }
    );

    if (updatedTicket) {
      return true;
    } else {
      return "Ticket Not Found";
    }
  } catch (error) {
    console.error("Error updating ticket:", error);
    return false;
  }
}