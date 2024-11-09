import Cards from "../Components/cards";
import {Montserrat} from "next/font/google";

export default function Home() {
  return (

    <div className='bg-[#252b42] min-h-screen'>
      
      {/* Content section */}

      <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-8 space-y-10 -mt-20 w-[699px] m-auto">
          <div className="flex flex-col items-center text-center p-10 space-y-4">
            <h1 className="text-[#23A6F0] text-[16px] leading-[24px] tracking-[0.1px] mt-24 font-bold">Welcome</h1>
            <h1 className="text-[#FFFFFF] text-[53px] leading-[80px] tracking-[0.2px] text-center pt-3 font-bold w-[542px]">Selling on the internet like a pro</h1>
            <p className="text-[#FFFFFF] text-[20px] leading-[30px] tracking-[0.2px] text-center justify-center pt-3 w-[512px]">We know how large objects will act, but things on a small scale just do not act that way.</p>
            <div className="flex space-x-2 pt-4">
              <button className="w-48 rounded-[5px] px-10 py-3 bg-[#23A6F0] text-[#FFFFFF] text-[14px] leading-[22px] tracking-[0.2px] font-bold hover:bg-transparent border border-[#23A6F0]">Get Quote Now</button>
              <button className="w-40 rounded-[5px] px-10 py-3 border border-[#23A6F0] text-[#23A6F0] text-[14px] leading-[22px] tracking-[0.2px] font-bold hover:bg-[#FFFFFF]">Learn More</button>
            </div>
          </div>

        <Cards/>
       
      </div>
    </div>
  )
}