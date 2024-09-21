import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

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