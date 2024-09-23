import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET COMMENTS
export const GET = async (req) => {

    const { searchParams } = new URL(req.url)
    // console.log(searchParams)
    const postId = searchParams.get("postId")
    // console.log(postId)

    try {

        const comments = await prisma.comment.findMany({
            where: {
                ...(postId && { postId: postId })
            },
            include: { user: true }
        })

        // console.log(comments)

        return new NextResponse(JSON.stringify(
            {
                status: "Success",
                comments,
            },
            {
                status: 200
            }
        ))
    } catch (error) {
        // console.log(error)
        return new NextResponse(JSON.stringify(
            {
                status: "Failed",
                message: "Something went wrong",
                data: error
            },
            {
                status: 500
            }
        ))
    }
}

//POST COMMENT
export const POST = async (req) => {

    const session = await getAuthSession();
    // console.log(session);
    // console.log(session.user);
    if (!session) {
        return new NextResponse(JSON.stringify(
            {
                status: "Failed",
                message: "You are not authenticated for this operation",
            },
            {
                status: 401
            }
        ))
    }
    try {
        const body = await req.json();
        // console.log(body)
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email }
        })

        // console.log(comments)

        return new NextResponse(JSON.stringify(
            {
                status: "Success",
                comment,
            },
            {
                status: 200
            }
        ))
    } catch (error) {
        // console.log(error)
        return new NextResponse(JSON.stringify(
            {
                status: "Failed",
                message: "Something went wrong",
                data: error
            },
            {
                status: 500
            }
        ))
    }
}