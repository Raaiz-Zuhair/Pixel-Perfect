"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLinkClass = (path) => {
        return pathname === path
            ? "text-white cursor-pointer "
            : "hover:text-black  cursor-pointer ";
    };
    return (
        <>
            <div className="container mx-auto py-10 px-8">
                <div className="lg:flex lg:justify-between ">
                    <div className="flex  items-center justify-between ">
                        <Link href="/">
                            <div className="flex lg:gap-24 md:gap-24 lg:flex-row md:flex-row flex-col gap-2">
                                <div className="flex items-center gap-1">
                                    <h1 className="font-bold text-3xl text-gray-200">pixel perfect</h1>
                                </div>
                                <div className="text-gray-200 ">
                                    <p className="leading-tight text-sm ">40n100n/40n <br />100w/;-100</p>
                                </div>
                            </div></Link>
                            {/* mobile screen menu btn */}
                        <div className="lg:hidden" onClick={toggleMenu}>
                            <Image
                                src={isMenuOpen ? "/icon-close.svg" : "/icon-hamburger.svg"}
                                alt="menu-button"
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>
                    {/* Large-screen menu */}
                    <div className="hidden lg:block">
                        <div className="flex gap-24 items-center">
                            <div className="flex gap-16 text-white">
                                <Link href="/">
                                    <h3 className={getLinkClass("/")}>Home</h3>
                                </Link>
                                <Link href="/">
                                    <h3 className={getLinkClass("/")}>Service</h3>
                                </Link>
                                <Link href="/">
                                    <h3 className={getLinkClass("/")}>About</h3>
                                </Link>
                                <Link href="/">
                                    <h3 className={getLinkClass("/")}>Product</h3>
                                </Link>
                            </div>
                            <button className="bg-white text-black px-10 py-3 rounded-full font-medium text-lg hover:bg-black hover:text-white" onClick={toggleMenu}>Product</button>
                        </div>
                    </div>
                    {/* Mobile-screen menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-16">
                            <div className="flex flex-col gap-20 items-center">
                                <div className="flex flex-col gap-16 text-white">
                                    <Link href="/">
                                        <h3 className={getLinkClass("/")}>Home</h3>
                                    </Link>
                                    <Link href="/">
                                        <h3 className={getLinkClass("/")}>Service</h3>
                                    </Link>
                                    <Link href="/">
                                        <h3 className={getLinkClass("/")}>About</h3>
                                    </Link>
                                    <Link href="/">
                                        <h3 className={getLinkClass("/")}>Product</h3>
                                    </Link>
                                </div>
                                <button className="bg-white text-black px-10 py-3 rounded-full font-medium text-lg hover:bg-black hover:text-white">Product</button>
                            </div>
                        </div>
                    )}


                </div>

            </div>
        </>
    );
}