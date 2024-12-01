"use client"

import Image from "next/image";
import Link from "next/link";
import { MdStarRate } from "react-icons/md";

export default function Card({ img, txt }) {
    return (
        <div>
            <div className="bg-white rounded-3xl px-3 pt-3 h-[445px] lg:-order-1 ">
                <div className="w-full h-[250px] rounded-3xl"
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                </div>
                <div className="grid grid-cols-4 mt-[24px] ">
                    <MdStarRate color="red" size={50} />
                    <p className="lg:text-2xl md:text-2xl  font-medium col-span-2 ml-4">
                        {txt}
                    </p>
                    <div className="flex justify-end items-end">
                        <Link href="/">
                            <p className="text-red-500 lg:text-base md:text-base text-[12px]  underline font-medium ">
                                See More
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}