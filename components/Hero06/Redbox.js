export default function Redbox(){
    return(
        <>
            <div className="bg-red-500 rounded-3xl lg:w-5/12 w-full lg:p-4 p-2 ">
              <div className="text-white flex flex-col gap-24 ">
                <div>
                  <h1 className="lg:text-2xl text-lg leading-tight lg:mb-[120px] mb-[80px]">
                    Tailored Solution <br />
                    For Every Project
                  </h1>
                  <p className="lg:text-base text-sm">2023</p>
                </div>
                <div>
                  <div className="flex">
                    <h1 className="lg:text-[250px] md:text-[250px] text-[155px]">
                      120
                    </h1>
                    <p className="lg:text-[70px] md:text-[70px] text-[40px] lg:mt-44 md:mt-44 mt-24">
                      k
                    </p>
                  </div>
                  <div className="mb-4 flex lg:justify-between md:justify-between ">
                    <h1 className="lg:text-2xl text-lg leading-tight ">
                      Your Partner In <br />
                      Digital Exellence
                    </h1>
                    <p className="lg:text-base text-sm lg:ml-0 ml-20">
                      3/32/2004
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}