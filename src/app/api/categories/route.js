import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(
            {
                status: "Success",
                data: categories
            },
            {
                status: 200
            }
        ))
    } catch (error) {
        console.log(error)
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