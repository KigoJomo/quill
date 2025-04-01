import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ message: 'Test API is working' });
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json(
      { message: 'Data received', data: body },
      { status: 201 }
    );
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json({ message: 'Update successful', data: body });
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function DELETE() {
  try {
    return NextResponse.json({ message: 'Delete successful' });
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
