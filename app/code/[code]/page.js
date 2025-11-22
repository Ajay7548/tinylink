import { prisma } from '@/lib/db';
import Link from 'next/link';



const StatePage = async ({ params }) => {
  const { code } = await params;

  const link = await prisma.link.findUnique({
    where: { code },
  });

  if (!link) {
    return (
      <div className="p-10 text-center text-red-600">
        <h1>Link Not Found</h1>
      </div>
    );
  }

  const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${link.code}`;

  return (
    <div className="w-full mx-auto p-6 pt-20 bg-linear-to-t from-black to-gray-800">
      <h1 className="text-2xl font-bold text-center mb-4">Link Stats</h1>

      <div className="md:w-1/2  mx-auto border p-5 rounded-lg space-y-3">
        
        <div>
          <p className="text-gray-500 text-sm">Short code:</p>
          <Link href={`/${link.code}`} className="text-blue-600 underline">
            {shortUrl}
          </Link>
        </div>

        <div className='w-full'>
          <p className="text-gray-500  text-sm">Target URL:</p>
          <p className=' wrap-break-word'>{link.fullUrl}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Total Clicks:</p>
          <p className="font-semibold">{link.clicks}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Last Clicked time:</p>
          <p>{link.lastClickedAt ? link.lastClickedAt.toString() : "Never"}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Created:</p>
          <p>{link.createdAt.toString()}</p>
        </div>

        {/* Proper Delete Button */}
        <form action={async () => { 
          "use server"; 
          await prisma.link.delete({ where: { code } }); 
        }}>
          <button
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete Link
          </button>
        </form>

      </div>
    </div>
  );
};

export default StatePage;
