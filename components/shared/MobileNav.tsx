import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import NavItems from './NavItems'
// import Image from 'next/image'
  
const MobileNav = () => {

  return (
    <div className='md:hidden'>
    <Sheet>
    <SheetTrigger className='align-middle'>

    <Image
    
    src="/assets/icons/menu.svg"
    alt='menu'
    width={24}
    height={23}
    className='cursor-pointer'
    />   
    
    </SheetTrigger>
    <SheetContent className='flex flex-col bg-white md:hidden'>
   
   <Image
      src='/assets/images/logo.svg'
      alt='logo'
      width={128}
      height={38}
   />
  <Separator  className='border border-black'/>
  <NavItems></NavItems>
    </SheetContent>
  </Sheet>
  </div>
  )

}

export default MobileNav