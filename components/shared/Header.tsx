import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
  
    <header className="w-full border-b">
        <div className="wrapper flex justify-between items-center">
         <Link href='/'>
          
          <Image
          src='/assets/images/logo.svg' width={128}height={38}
         alt="=event" 
          ></Image>
          </Link> 
        </div> 
    </header>





  )
}

export default Header