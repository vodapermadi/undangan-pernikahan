const AttentionComponent = () => {
    return (
        <div className="h-auto bg-[url('/hero.jpg')] bg-cover bg-no-repeat w-full relative">
            <div className="absolute top-0 bg-white/60 w-full h-full z-10"></div>
            <div className="min-h-screen w-full flex justify-center items-center">
                <div className="w-5/6 text-center flex justify-center flex-col gap-3 z-20 py-5">
                    <h1 className="text-6xl font-bold">Undangan & Acara</h1>
                    <p className="font-semibold">Bahagia rasanya apabila anda berkenan hadir dan memberikan doa restu kepada kami. Kami mengundang anda untuk hadir dalam acara resepsi pernikahan kami</p>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full">
                        <div className="w-full bg-white text-start p-4">
                            <h1 className="text-xl font-semibold text-blue-700">Pemberkatan Pernikahan </h1>
                            <table className="w-full">
                                <tbody>
                                    <tr className="">
                                        <th className="font-semibold text-sm text-start"> Tanggal</th>
                                        <td>Jumat, 21 Juni 2024</td>
                                    </tr>
                                    <tr>
                                        <th className="font-semibold text-sm text-start">Pukul</th>
                                        <td>09.30-11.00 WIB</td>
                                    </tr>
                                    <tr>
                                        <th className="font-semibold text-sm text-start">Bertempat di</th>
                                        <td>GKJW Mojowarno</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="w-full bg-white text-start p-4">
                            <h1 className="text-xl font-semibold text-blue-700">Resepsi Pernikahan</h1>
                            <table className="w-full">
                                <tbody>
                                    <tr className="">
                                        <th className="font-semibold text-sm text-start"> Tanggal</th>
                                        <td>Jumat, 21 Juni 2024</td>
                                    </tr>
                                    <tr>
                                        <th className="font-semibold text-sm text-start">Pukul</th>
                                        <td>11.00 - selesai</td>
                                    </tr>
                                    <tr>
                                        <th className="font-semibold text-sm text-start">Bertempat di</th>
                                        <td>Kediaman mempelai perempuan Jl.Sedap Malam 6A Ngoro Jombang</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttentionComponent