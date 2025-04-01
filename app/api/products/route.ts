import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find({});

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    const product = await Product.create(body);
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
