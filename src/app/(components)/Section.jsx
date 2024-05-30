"use client"
import { useSearchParams } from "next/navigation"

const SectionComponent = () => {
    const param = useSearchParams()
    console.log(param.get('name'))
    return (
        <div className="h-auto w-full bg-[url('/hero.jpg')] bg-cover bg-no-repeat">
            <div className="absolute top-0 bg-white/60 w-full h-screen z-10"></div>
            <div className="h-screen w-full flex justify-center items-center flex-col">
                <div className="w-full text-center flex justify-center flex-col gap-3 z-20">
                    <h1 className="text-6xl font-bold">Kezia & Kris</h1>
                    <p className="font-semibold">Akan segera melangsungkan pernikahan</p>
                    <h1 className="text-sky-700 font-bold text-3xl">Jum&apos;at, 21 Juni 2024</h1>
                </div>
                <div className="w-full text-center z-20 mt-4">
                    <span className="text-lg">Mengundang</span>
                    <h1 className="font-bold text-3xl">{param.get('name')}</h1>
                </div>
            </div>
        </div>
    )
}

export default SectionComponent