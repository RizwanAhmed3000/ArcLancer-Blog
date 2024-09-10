import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

/////////////////GET SINGLE POST//////////////////////////

export const GET = async (req, { params }) => {
    const { slug } = params;
    // console.log(slug)
    // console.log(params)
    try {
        const post = await prisma.post.findUnique(
            {
                where: { id: slug },
                include: { user: true }
            }
        )
        // console.log(post)
        return new NextResponse(JSON.stringify(
            {
                status: "Success",
                post,
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