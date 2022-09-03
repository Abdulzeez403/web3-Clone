import {CgProfile} from "react-icons/cg"
import {MdOutlineAccountBalanceWallet} from "react-icons/md"
import {AiOutlineSearch} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi';
import Logo from "../public/opensea.png"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return ( 
    
    <div className= 'flex gap-[7rem] m-5 items-center md:gap-6 md:mx-0 lg:gap-6'>
      <div className="flex gap-3 items-center "> 
      <Image src={Logo}
        width={50}
        height={50}
        className="object-contain"
        />
        <h4 className="font-bold font-[900] text-xl" >Opensea</h4>
      </div>

      
      <div className="hidden p-2 rounde-xl items-center gap-2 md:border-4 md:rounded-xl md:flex md:w-[100%] lg:flex">
      <AiOutlineSearch color="grey" size={25}/>
        <input type="text"
         name=""
        className=" outline-none font-[Poppins] text-xl " 
        placeholder="Search items, collections, and acounts"/>
      </div>

    
        <ul className=" hidden gap-7 text-lg font-bold items-center
          md:hidden lg:flex">
          <Link href="/">Explore</Link>
          <Link href="/">Stat</Link>
          <Link href="/">Resource</Link>
          <Link href="/">Create</Link>
        </ul>
      
      
      <div className='flex gap-6'>
      <AiOutlineSearch className='flex  md:hidden lg:hidden'  color="grey" size={34}/>
      <FiMenu className='flex  md:flex lg:hidden' color='grey' size={34}/>
      <CgProfile  className='hidden md:flex lg:flex' color="grey" size={34}/>
       <MdOutlineAccountBalanceWallet   className='hidden md:flex lg:flex'   color="grey" size={34}/>
      </div>


    </div>

   );
}
 
export default Navbar;