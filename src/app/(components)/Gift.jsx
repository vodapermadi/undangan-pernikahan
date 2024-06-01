import React from 'react'

const Gift = () => {
    return (
        <div className='w-full py-5 flex justify-center items-center'>
            <div className='w-5/6'>
                <h1 className='text-4xl text-center font-extrabold'>Kado Nikah</h1>
                <p className='text-sm font-semibold text-center'>Terima kasih atas doa dan restu yang telah teman-teman berikan, jika teman-teman ingin mengirimkan kado tetapi berhalangan hadir teman-teman bisa mengirimkan di tempat resepsi pernikahan kami. Atau bisa juga dengan kirim melalui rekening di bawah ini. Sebelumnya, kami mengucapkan banyak terima kasih. </p>
                <ul className='mt-3 text-sm font-semibold text-left'>
                    <li className='list-disc list-inside'>
                    BNI BNI <br />
                    No.Rek 0519943708 <br />
                    a/n Kezia Meirenanta Kusuma W
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Gift