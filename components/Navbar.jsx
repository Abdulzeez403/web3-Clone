import {CgProfile} from "react-icons/cg"
import {MdOutlineAccountBalanceWallet} from "react-icons/md"
import {AiOutlineSearch} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi';
import Logo from "../public/opensea.png"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return ( 
    <div className='justify-center m-0 flex p-4 shadow-lg'>
    <div className= 'flex gap-[6rem] items-center  md:mx-0 md:gap-3 lg:gap-6'>
      <div className="flex gap-3 items-center "> 
      <Image src={Logo}
      width={50}
      height={50}
        />
        <h4 className="font-bold font-[900] text-xl" >Opensea</h4>
      </div>

      
      <div className=" hidden p-2 rounde-xl items-center gap-2 md:border-4 md:rounded-xl md:flex md:w-[38rem] lg:flex lg:w-[42rem]">
      <AiOutlineSearch color="grey" size={28}/>
        <input type="text"
         name=""
        className=" outline-none font-[Poppins] text-xl w-[38rem] " 
        placeholder="Search items, collections, and acounts"/>
      </div>

    
        <ul className=" hidden gap-7 text-lg font-bold items-center
          md:hidden lg:flex">
          <Link href="/">Explore</Link>
          <Link href="/">Stat</Link>
          <Link href="/">Resource</Link>
          <Link href="/">Create</Link>
        </ul>
      
      
      <div className='flex gap-5'>
      <AiOutlineSearch className='flex  md:hidden lg:hidden'  color="grey" size={34}/>
      <FiMenu className='flex  md:flex lg:hidden' color='grey' size={34}/>
      <CgProfile  className='hidden md:flex lg:flex' color="grey" size={34}/>
       <MdOutlineAccountBalanceWallet   className='hidden md:flex lg:flex'   color="grey" size={34}/>
      </div>


    </div>
    </div>
   );
}
 
export default Navbar;