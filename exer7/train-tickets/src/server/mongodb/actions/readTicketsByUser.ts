import connectDB from "../index";
import Ticket from "../models/Ticket";
import User from "../models/User";

export async function readTicketsByUser(userId: string) {
  await connectDB();

  try {
    const user = await User.findById(userId);
    if (!user) {
      return "User Not Found";
    }

    const tickets = await Ticket.find({ userId: userId });

    return JSON.parse(JSON.stringify(tickets));

  } catch (error) {
    console.error("Error reading tickets:", error);
    return false;
  }
}