import dbConnect from '@/lib/dbConnect';
import Category from '@/models/Category';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  try {
    const categories = await Category.find({});

    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    const category = await Category.create(body);
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
