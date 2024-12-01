"use client"
import Image from "next/image";

export default function Hero03(){
    return(
        <div className="bg-gray-100 ">
            <div className="container mx-auto px-8">
              <div className="flex lg:pb-20  lg:flex-row flex-col lg:justify-between lg:gap-0 gap-5">
                <div className="flex  lg:flex-col flex-row lg:justify-start justify-between  gap-24 md:flex-row-reverse">
                  <div className="flex ">
                    <div className="rounded-full border-2 border-red-600 ">
                      <Image
                        className="rounded-full"
                        src="/prof-img.jpg"
                        alt="Profile-img"
                        width={70}
                        height={70}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-medium leading-tight text-slate-700">
                      Bringing The <br />
                      Future Closer
                    </h1>
                  </div>
                </div>

                <h1 className="lg:text-[60px] text-[30px] font-medium leading-tight lg:text-start text-center">
                  <span className="lg:mx-[135px]">empowering brands</span>
                  <br />
                  through visionary designs-and <br />
                  <span className="text-red-500">strategic creativty</span>
                </h1>
              </div>
            </div>
          </div>
    );
}