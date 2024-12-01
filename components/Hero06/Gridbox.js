"use client"

import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

export default function Gridbox({img, txt }) {
    return (
        <>
            <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-1 lg:pl-10 items-center   ">
            <div className="lg:h-[205px] lg:w-[200px] h-[160px] w-[155px] rounded-3xl lg:col-span-2 "
                    style={{
                        backgroundImage: `url(${img} )`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                </div>
                <div className=" lg:col-span-3   lg:ml-12 2xl:ml-0  md:ml-0">
                    <p className="lg:text-2xl font-medium ">
                        {txt}
                    </p>
                </div>
                <p className="lg:text-lg">3/32/2004</p>
                <div className="rounded-full border-2 w-fit lg:p-4 ml-5 lg:ml-0 p-2 hover:bg-red-500  bg-white group">
                    <MdArrowOutward
                        className="group-hover:text-green-400 text-red-500"
                        size={25}
                    />
                </div>
            </div>


            
        </>
    );
}