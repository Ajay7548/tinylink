import  {prisma} from '@/lib/db.js'
import { redirect } from 'next/navigation'


const Page = async ({params}) => {
    const {code} = await params

    const link = await prisma.link.findUnique({
        where:{code}
    })


    if(!link){
        return (
            <div className='text-center text-red-600 p-10'>
                <h1>Short link not found</h1>
            </div>
        )
    }

    // Update Stats 
    await prisma.link.update({
        where:{code},
        data:{
            clicks:{increment:1},
            lastClickedAt:new Date()
        }
    })

    //redirect to full url
    redirect(link.fullUrl)

}

export default Page