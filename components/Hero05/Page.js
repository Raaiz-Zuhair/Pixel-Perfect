import Image from "next/image";

export default function Hero05(){
    return(
        <div className="bg-gray-100">
        <div className="container mx-auto lg:pt-12 pt-10 lg:pb-36 pb-20 px-8 relative ">
          <h1 className="text-2xl lg:text-start text-center font-medium leading-tight text-slate-700">
            Where Innovation <br />
            Meets Aesthetics
          </h1>
          <div className="text-center mt-8 text-slate-950 lg:text-6xl text-3xl font-medium lg:space-y-8 space-y-2">
            <h1>Mobile App Design</h1>
            <h1>Web Design</h1>
            <h1>Expertice</h1>
            <h1>Visual Identity</h1>
            <h1>Web Development</h1>
            <h1>Email Marketing</h1>
          </div>
          <div className="hidden lg:block absolute transform right-0 -translate-y-24 ">
            <Image
              className="rounded-full"
              src="/prof-img.jpg"
              alt="Pic"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    );
}