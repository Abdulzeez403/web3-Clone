import Image from "next/image";
import {CgDanger} from 'react-icons/cg'
import HomeImage from "../public/NTF1.png"


const HomePage = () => {


  return ( 

   <div  className="HomeImages">
<div className="subHomestyle">
<div className="flex justify-around">

<div className = "gap-3 w-[50%]">
<h4 className=" text-[3.2rem] font-bold ">Discover, collect, and sell  extraordinary NFTs</h4>
<br/>
  <p className='text-[2rem] w-[60%] '>OpenSea is the world's first and largest NFT marketplace</p>
  <br/>

  <div className="gap-6 flex ">
    <button className="w-[8rem] h-[4rem] rounded-lg bg-blue-200"> Explore</button>
    <button className="w-[8rem] h-[4rem] rounded-lg shadow-lg"> Create</button>
  </div>

</div>

<div className="  bg-white rounded-0 rounded-tl-lg rounded-tr-lg" >
  <Image src={HomeImage}
  alt="Images"
  width={500} 
  height={400}/>

  <div className=" flex justify-between  shadow-lg  rounded-bl-lg  rounded-br-lg  ">
    <div className="mx-4">
    <Image src={HomeImage}
  alt="Images"
  width={40} 
  height={40}
  className="rounded-full"/>
<div>
<h4>SpaceFace</h4>
<h4>Adamtoksoz</h4>
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