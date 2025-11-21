import { prisma } from '@/lib/db.js'
import Link from 'next/link'

const StatePage = async ({ params }) => {
    const { code } = await params

    //fetch link

    const link = await prisma.link.findUnique({
        where: { code }
    })

    if (!link) {
        return (
            <div className='p-10 text-center text-red-600'>
                <h1>Link not Found</h1>
            </div>
        )
    }

    // async function handleDelete() {
    //     const res = await fetch(`/api/links/${code}`, {
    //         method: "DELETE",
    //     });

    //     if (!res.ok) {
    //         alert("Failed to delete.");
    //         return;
    //     }

    //     alert("Deleted successfully!");
    // }


    const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${link.code}`

    return (
        <div className='max-w-xl mx-auto p-6'>
            <h1 className='text-2xl font-bold mb-4'>Link Stats</h1>

            <div className='border p-5 rounded-lg space-y-3'>

                <div>
                    <p className='text-gray-500 text-sm'>Short URL:</p>
                    <Link href={`/${link.code}`} className='text-blue-600 underline'>
                        {shortUrl}
                    </Link>
                </div>

                <div>
                    <p className='text-gray-500 text-sm'>Original URL:</p>
                    <p>{link.fullUrl}</p>
                </div>

                <div>
                    <p className='text-gray-500 text-sm'>Clicks:</p>
                    <p className='font-semibold'>{link.clicks}</p>
                </div>

                <div>
                    <p className='text-gray-500 text-sm'>Last Clicked:</p>
                    <p>{link.lastClickedAt ? link.lastClickedAt.toString() : "Never"}</p>
                </div>

                <div>
                    <p className='text-gray-500 text-sm'>Created:</p>
                    <p>{link.createdAt.toString()}</p>
                </div>

                {/* delete btn  */}
                <form action={`/api/links/${code}`} method='POST'>
                    <input type="hidden" name='method' value='DELETE' />
                    <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                        Delete Link
                    </button>
                </form>
            </div>
        </div>
    )

}

export default StatePage
