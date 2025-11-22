import { prisma } from '@/lib/db.js'
import { toast } from 'sonner'

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

        function validateUrl(url) {
            try {
                new URL(url)
                return true
            } catch (error) {
                return false
            }
        }

        if (!validateUrl(fullUrl)) {
            return Response.json(
                { error: "Invalid URL format" },
                { status: 400 }
            );
        }


        const codeRegex = /^[A-Za-z0-9]{6,8}$/;

        if (!codeRegex.test(code)) {
            return Response.json(
                { error: "Code must be 6–8 characters and alphanumeric only." },
                { status: 400 }
            );
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