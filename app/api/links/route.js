import { prisma } from '@/lib/db.js'

export async function POST(request) {
    try {
        const { fullUrl, code } = await request.json()

        if (!fullUrl || !code) {
            return Response.json({ error: "fullUrl and code are required" }, { status: 400 })
        }

        const linkExist = await prisma.link.findUnique({ where: { code } })

        if (linkExist) {
            return Response.json({ error: "Link already exists" }, { status: 409 })
        }

        const createLink = await prisma.link.create({
            data: {
                fullUrl, code
            }
        })

        return Response.json(createLink, { status: 201 })
    } catch (error) {
        console.log(error)
        return Response.json({ error: "Internal Server Error" }, { status: 500 })
    }

}


export async function GET(request) {
    try {
        const listLinks = await prisma.link.findMany({
            orderBy: { createdAt: 'desc' }
        })

        return Response.json(listLinks, { status: 200 })
    } catch (error) {
        console.log(error)
        return Response.json({ error: "Internal Server error" }, { status: 500 })
    }
}