import dbConnect from '@/lib/dbConnect';
import BlogPost from '@/models/BlogPost';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  try {
    const blogPosts = await BlogPost.find({}).sort({ createdAt: -1 });
    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    const blogPost = await BlogPost.create(body);
    return NextResponse.json(blogPost, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function PATCH(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Blog post ID is required.' },
        { status: 400 }
      );
    }

    const updatedBlogPost = await BlogPost.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlogPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedBlogPost);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
