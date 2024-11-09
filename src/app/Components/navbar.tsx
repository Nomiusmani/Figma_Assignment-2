import Link from 'next/link';
import {Montserrat} from "next/font/google";
export default function Navbar() {
    return (
        <div className='flex items-center justify-center w-full bg-[#252b42]'>
            <nav className='h-[91px] mx-[35px] flex items-center w-[990px] gap-[15%] '>
                <h3 className='text-white font-bold text-[24px] leading-[32px] tracking-[0.1px]'>BrandName</h3>

                <div className=" flex justify-between grow ">
                    <div className="flex space-x-[21px]  justify-between items-center">
                        <Link className="text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.2px] font-bold hover:text-[#23A6F0]" href="/Home">Home</Link>
                        <Link className="text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.2px] font-bold hover:text-[#23A6F0]" href="/Product">Product</Link>
                        <Link className="text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.2px] font-bold hover:text-[#23A6F0]" href="/Pricing">Pricing</Link>
                        <Link className="text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.2px] font-bold hover:text-[#23A6F0]" href="/Contact">Contact</Link>
                    </div>
                    <div className="   flex space-x-[45px]">
                        <button className=" text-[#FFFFFF] text-[14px] leading-[22px] tracking-[0.2px] text-right px-4 py-2 font-bold hover:text-blue-600">Login</button>
                        <button className=" rounded-tl-[5px] rounded-bl-[5px] px-[25px] py-[13px] bg-[#23A6F0] text-[#FFFFFF] text-[14px] leading-[22px] tracking-[0.2px] text-right font-bold hover:bg-blue-600">JOIN US</button>
                    </div>
                </div>
            </nav>
        </div>

    )
}