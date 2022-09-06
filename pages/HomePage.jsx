import Image from "next/image";
import {CgDanger} from 'react-icons/cg'
import HomeImage from "../public/NTF1.png"


const HomePage = () => {


  return ( 

   <div  className="HomeImages">
  <br/>  <br/>  <br/>

<div className="subHomestyle">
<div className="block  md:block lg:flex lg:justify-around">
<div className = "gap-y-10 lg:gap-3 lg:w-[50%]">
<h4 className="text-center text-[1.6rem] lg:text-[3.2rem] font-bold ">Discover, collect, and sell  extraordinary NFTs</h4>
<br/>
  <p className='text-center text-[1rem]  lg:text-[2rem] lg:w-[60%] '>OpenSea is the world's first and largest NFT marketplace</p>
  <br/>

  <div className="gap-6 flex justify-center mb-5 ">
    <button className="w-[8rem] h-[4rem] rounded-lg bg-blue-200"> Explore</button>
    <button className="w-[8rem] h-[4rem] rounded-lg shadow-lg"> Create</button>
  </div>

</div>

    <div className="m-3 bg-red-100 lg:m-0 rounded-lg "  >
  <Image src={HomeImage}
  alt="Images"
  width={500} 
  height={400}/>

  <div className=" flex justify-between shadow-lg mx-6">
    <div>
    <Image src={HomeImage}
  alt="Images"
  width={40} 
  height={40}
  className="rounded-full"/>
<div>
<h4  className="text-lg font-bold">SpaceFace</h4>
<h4 className="text-blue-400">Adamtoksoz</h4>
</div>
</div>
<CgDanger color='grey' size={20}/>
  </div>

</div>






</div>
</div>
</div>


   );
}
 
export default HomePage;