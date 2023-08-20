import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='p-3 bg-white rounded-b shadow-lg md:p-6 flex items-center justify-between'>
        <h4 className='text-3xl font-bold'>Logo</h4>
        <div className='flex items-center space-x-5 md:space-x-10'>
            <Link href="/">Home</Link>
            <Link href="/signin">SignIn</Link>
            <Link href="/signup">SignUp</Link>

        </div>
    </div>
  )
}

export default Navbar