import connectDB from "../index";
import User from "../models/User";

export async function createUser(data: { name: string, age?: number }) {
  await connectDB();
  try {
    const newUser = new User(data);
    await newUser.save();
    return true; 
  } catch (error) {
    console.error("Error creating user:", error);
    return false;
  }
}