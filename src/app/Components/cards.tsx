import Link from 'next/link';
import {Montserrat} from "next/font/google";
export default function Cards() {
    return (


                       /*card 1*/

<div className="flex space-x-6">
<div className="grid grid-cols gap-5 w-full mt-8">
  <div className="bg-[#FFFFFF] rounded w-80 h-72 pt-8 px-12 shadow-lg shadow-black hover:scale-95 duration-1000">
    <div className="flex flex-col items-start">
      <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-lg mb-4 "></div>
      <h1 className="text-[#252B42] text-[16px] leading-[24px] tracking-[0.1px] font-bold">training Courses</h1>
      <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
      <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-[400px] pt-5">The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>
  </div>
</div>

                      {/*card 2*/} 

<div className="grid grid-cols gap-5 w-full mt-8">
  <div className="bg-[#FFFFFF] rounded w-80 h-72 pt-8 px-12 shadow-lg shadow-black hover:scale-95 duration-1000">
    <div className="flex flex-col items-start">
      <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-lg mb-4 "></div>
      <h1 className="text-[#252B42] text-[16px] leading-[24px] tracking-[0.1px] font-bold">2,769 training Courses</h1>
      <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
      <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-[400px] pt-5">The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>
  </div>
</div>

                      {/*card 3*/ }

<div className="grid grid-cols gap-5 w-full  mt-8">
  <div className="bg-[#23A6F0] rounded w-80 h-72 pt-8 px-12 shadow-lg shadow-black hover:scale-95 duration-1000">
    <div className="flex flex-col items-start">
      <div className="w-[70px] h-[76px] bg-[#FFFFFF] rounded-lg mb-4 "></div>
      <h1 className="text-[#FFFFFF] text-[16px] leading-[24px] tracking-[0.1px] font-bold">training Courses</h1>
      <div className="w-[50px] h-[2px] bg-[#FFFFFF] mt-4"></div>
      <p className="text-[#FFFFFF] text-[14px] leading-[20px] tracking-[0.2px] font-[400px] pt-5">The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>
  </div>
</div>

</div>
 )
}
