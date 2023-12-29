import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer  className='border-t'>

     <div className='flex-center flex-between flex flex-col  gap-4 text-center  ' >
      <Link href='/'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={128}
          height={38}
        />
      </Link>
        <p>All Right Reserved </p>
     </div>
      
    </footer>
  )
}

export default Footer