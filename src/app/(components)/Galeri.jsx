"use client"
import Image from 'next/image'
import React from 'react'

const Galeri = () => {
    const countImage = [1,2,3,4,5]
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center bg-white'>
            <div className="w-5/6 my-5 text-center">
                <h1 className='font-semibold text-4xl'>Photo Galeri</h1>
            </div>
            <div className='w-5/6 grid grid-cols-1 md:grid-cols-3 gap-2'>
                {countImage.map((row,i) => {
                    return(
                        <Image key={i} src={`/${row}.jpeg`} width={500} height={500} className='w-full h-auto rounded' alt='...' priority />
                    )
                })}
            </div>
        </div>
    )
}

export default Galeri