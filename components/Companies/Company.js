"use client"

export default function Companies({
    logo,
    txt
}){
    return(
        <main>
            <div className="flex gap-2 font-semibold items-center text-gray-400">
            {logo}
            <p className="text-xl font-bold">{txt}</p>
            </div>
        </main>
    );
}