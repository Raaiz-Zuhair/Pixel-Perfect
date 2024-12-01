import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Hero07() {
    return (
        <div className="bg-slate-100 ">
            <div className="container mx-auto text-slate-950 lg:py-24 py-16 px-8 relative">
                <p className="text-2xl lg:text-start text-center font-medium leading-tight text-slate-700">
                    Where Art <br />
                    Meets Strategy
                </p>
                <div className="flex justify-center items-center lg:mt-20 mt-10">
                    <div className="text-center lg:mb-40 mb-10">
                        <h1 className="lg:text-[65px] text-[43px] font-medium leading-tight">
                            Crafting Desings That <br />
                            Leave An Impact.
                        </h1>
                        <p className="text-slate-900 mt-6 text-lg">
                            Explore our portfolio of bespoke designs tailored <br />
                            to elevate your brand
                        </p>
                        <Link href="/">
                            <button className="bg-red-500 text-white px-8 py-3 rounded-full mt-4 font-medium text-lg">
                                Custom Quote
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:flex lg:justify-between hidden">
                    <div className="bg-white h-[310px] w-[310px] rotate-3 rounded-xl absolute transform -translate-y-[280px]">
                        <div className="bg-[url('/craft-2.jpg')] bg-cover bg-center h-[290px] w-[290px] rounded-xl "></div>
                    </div>
                    <div className="bg-white h-[320px] w-[280px] rounded-xl absolute right-1 transform -translate-y-[560px] -rotate-3">
                        <div className="bg-[url('/craft-3.jpg')] bg-cover bg-center h-[300px] w-[250px] rounded-xl "></div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex gap-2">
                        <FaStar color="orange" size={32} />
                        <p className="text-black">4.9</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

