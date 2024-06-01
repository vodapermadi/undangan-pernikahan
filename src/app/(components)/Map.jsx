import React from 'react'

const Map = () => {
    return (
        <div className='w-full flex justify-center items-center my-4'>
            <div className='w-5/6 '>
                <h1 className='font-semibold text-4xl text-center'>Peta Lokasi</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d988.4899283095242!2d112.27393226949624!3d-7.687472670468607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDEnMTQuOSJTIDExMsKwMTYnMjguNSJF!5e0!3m2!1sen!2sid!4v1717251757758!5m2!1sen!2sid" className='w-full h-auto' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Map