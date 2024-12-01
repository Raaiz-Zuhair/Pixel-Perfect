import Companies from "@/components/Companies/Company";
import Navbar from "@/components/Navbar/Navbar";
import Hero03 from "@/components/Hero03/page";
import Hero04 from "@/components/Hero04/Card";
import Hero05 from "@/components/Hero05/Page";
import Redbox from "@/components/Hero06/Redbox";
import Gridbox from "@/components/Hero06/Gridbox";
import Hero07 from "@/components/Hero07/Page";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { GiWaveSurfer } from "react-icons/gi";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { GiGoldStack } from "react-icons/gi";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <div className="relative">
        <div className="bg-[url('/hero-image-bg.jpg')] bg-cover bg-center w-full h-[min-h-screen]  ">
          {/* Navbar */}
          <Navbar />
          <div className="container mx-auto pb-12 px-8">
            <div className="flex lg:flex-row flex-col lg:mb-16 mb-10 gap-10 lg:justify-between">
              {/* prof-box */}
              <div className="bg-white rounded-2xl h-fit w-fit py-4 px-5  ">
                <div className="rounded  flex justify-between">
                  <Image
                    className="rounded-full"
                    src="/prof-img.jpg"
                    alt="Profile-img"
                    width={60}
                    height={60}
                  />
                  <div>
                    <div className="border-2 rounded-full flex justify-center items-center p-1 ">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="#000000"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-slate-900 text-sm font-medium leading-tight mt-2 font-size[10px]">
                  Your Partner In <br /> Design
                </p>
              </div>
              {/* white box 81% */}
              <div className="flex justify-center lg:block md:block">
                <div className="bg-white grid grid-cols-2 gap-6 lg:pt-6 lg:pb-8 lg:px-10 md:pt-6 md:pb-8 md:px-10 pt-3 pb-4 px-5   lg:w-[500px] md:w-[400px] rounded-tl-3xl rounded-2xl">
                  <div className="flex flex-col">
                    <h1 className="lg:text-[80px] mg:text-[80px] text-[60px] text-slate-900 font-medium ">
                      81%
                    </h1>
                    <p className="text-slate-900 mt-5 text-lg ">
                      From Concept To <br />
                      Completion
                    </p>
                    <div className="rounded-full border-2 border-blue-100 w-fit p-4 mt-16 hover:bg-red-500 group">
                      <FaArrowRightLong className="text-red-500 group-hover:text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-9">
                    <div className="mb-14 mt-7">
                      <div className="flex gap-2">
                        <FaStar color="orange" size={32} />
                        <p className="text-black">4.9</p>
                      </div>
                    </div>
                    <div className="flex items-center lg:gap-2 md:gap-1">
                      <Image src="/red.png" alt="" width={25} height={25} />
                      <p className="text-sm bg-gray-200 lg:px-10 md:px-10 px-5 py-1 text-black font-semibold rounded-3xl">
                        JMK88
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* search box */}
            <div className="lg:block md:block flex justify-center">
              <div className="flex items-center bg-white w-fit lg:px-8 lg:gap-40 lg:py-3 px-4 py-1 gap-20 border-2 rounded-full">
                <input
                  type="text"
                  placeholder="Get Started"
                  className="border-none bg- border- outline-none text-red-500 placeholder:text-red-500 py-2  placeholder:text-xl "
                />
                <div>
                  <FaArrowRightLong className="text-red-500" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* where creativity */}
      <div className=" bg-gray-100">
        <div className="container mx-auto px-8 text-center lg:text-start">
          <h1 className="lg:text-[82px] text-[40px] leading-tight font-medium text-slate-900 pt-9">
            where creativity <br />
            meets-strategy
          </h1>
        </div>
      </div>

      {/* hero-02  Companies*/}
      <div className="bg-gray-100">
        <div className="lg:py-20 py-12 flex lg:flex-row flex-col items-center lg:gap-0 gap-10 justify-between animate-loop-scroll">
          <Companies logo={<MdLiveTv size={30} />} txt={"Rata Show"} />

          <Companies logo={<GiWaveSurfer size={30} />} txt={"Waves"} />

          <Companies logo={<MdLiveTv size={30} />} txt={"Rata Show"} />

          <Companies
            logo={<MdOutlineModeOfTravel size={30} />}
            txt={"traverels."}
          />

          <Companies logo={<GiGoldStack size={30} />} txt={"goldlines"} />

          <Companies logo={""} txt={"velocity"} />
        </div>
      </div>

      {/* hero-03 */}
      <Hero03 />

      {/* Hero-04 */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-12 px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {/* card-1 */}
            <div className="lg:-order-1">
              <Hero04
                img={"/grid-1.jpg"}
                txt={
                  <span className="break-text">
                    Crafting a <br />
                    Standout <br />
                    Brand <br />
                    Identity
                  </span>
                }
              />
            </div>

            {/* Red Button see case study */}
            <div className="-order-1 md:order-1 lg:order-none">
              <div className="mb-7">
                <Link href="/">
                  <div className="bg-red-500 rounded-3xl ">
                    <div className="px-7 py-9 flex justify-between items-center">
                      <p className="text-xl font-medium text-white">
                        See Case Study
                      </p>
                      <div className="rounded-full border-2 w-fit p-2 bg-white border-none hover:bg-red-500 group">
                        <MdArrowOutward
                          className="text-red-500 group-hover:text-white"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/* card-02 */}
              <Hero04
                img={"/grid-2.jpg"}
                txt={
                  <span className="break-text">
                    Top 10 Designs <br />
                    Trends That <br />
                    Will Define <br />
                    2024
                  </span>
                }
              />
            </div>

            {/* card-03 */}
            <Hero04
              img={"/grid-3.jpg"}
              txt={
                <span className="break-text">
                  How to <br />
                  Choose The <br />
                  Right Colors
                </span>
              }
            />
          </div>
        </div>
      </div>

      {/* hero-05 */}
      <Hero05 />

      {/* hero-06 */}
      <div className="bg-gray-100 ">
        <div className="container mx-auto p-2">
          <div className="bg-white p-2 rounded-3xl flex lg:flex-row flex-col lg:items-center lg:gap-0 gap-7 ">
            <Redbox />
            <div className="lg:w-7/12 w-full flex flex-col lg:gap-12 gap-6 lg:pb-0 pb-5  ">
              {/* box-1 */}
              <Gridbox
                img={"/grid-1.jpg"}
                txt={
                  <span className="break-text">
                    Dive Into The <br />
                    Periodic Table And <br /> Discover The Secrects <br />
                    Of The
                  </span>
                }
              />

              {/* box-2 */}
              <Gridbox
                img={"/grid-2.jpg"}
                txt={
                  <span className="break-text">
                    Witness The Magic <br />
                    Of Chemical <br /> Reaction. Explore <br />
                    The World Of <br />
                    Combution
                  </span>
                }
              />

              {/* box-3 */}
              <Gridbox
                img={"/grid-3.jpg"}
                txt={
                  <span className="break-text">
                    Synthesis, And The <br />
                    Transformations That <br /> Shape Our World.
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* hero-07 */}
      <Hero07 />
    </div>
  );
}
