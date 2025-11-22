import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    return (
        <>
<div className="w-full fixed top-0 left-0 z-50 pt-4">
  <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

    <h1 className="font-bold text-2xl text-white tracking-wide">
      Tiny<span className="text-indigo-400">Link</span>
    </h1>

    <div className="flex items-center gap-4">
     {/* <Link
  href="/"
  className="bg-zinc-100 text-black font-semibold px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
>
  Dashboard
</Link> */}

    </div>

  </div>
</div>

        </>
    )
}

export default Navbar