import { NextResponse } from 'next/server';
import { createUser } from '@/server/mongodb/actions/createUser';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const success = await createUser(body);

    if (success) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Failed" }, { status: 500 });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}