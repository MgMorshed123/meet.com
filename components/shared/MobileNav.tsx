import React from 'react'
import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
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
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  </div>
  )

}

export default MobileNav