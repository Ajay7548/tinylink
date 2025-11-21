import {prisma} from '@/lib/db.js'


export async function GET(request,context) {
    try {
        const {code} = await context.params

        const singleLink = await prisma.link.findUnique({where:{code}})

        if(!singleLink){
            return Response.json({message:'Link not found'},{status:404})
        }
        return Response.json({singleLink})

    } catch (error) {
    console.log("Error getting single link:", error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}

//Delete link

export async function DELETE(request,context) {
    try {
        const {code} = await context.params

        await prisma.link.delete({where:{code}})

        return Response.json({message:"Link Deleted"})
    } catch (error) {
    console.log("Error in deleting link:", error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}