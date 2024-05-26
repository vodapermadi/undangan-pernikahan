const AttentionComponent = () => {
    return (
        <div className="bg-[url('https://picsum.photos/seed/picsum/1800/980')] h-auto bg-cover bg-no-repeat w-full">
            <div className="h-screen w-full flex justify-center items-center">
                <div className="w-5/6 text-center flex justify-center flex-col gap-3">
                    <h1 className="text-6xl font-bold">Undangan & Acara</h1>
                    <p className="font-semibold">Bahagia rasanya apabila anda berkenan hadir dan memberikan doa restu kepada kami. Kami mengundang anda untuk hadir dalam acara resepsi pernikahan kami berikut ini </p>
                    <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="w-full bg-white text-start p-4">
                            <h1 className="text-xl font-semibold">Pemberkatan Pernikahan </h1>
                            <table className="w-full">
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
                            </table>
                        </div>

                        <div className="w-full bg-white text-start p-4">
                            <h1 className="text-xl font-semibold">Resepsi Pernikahan</h1>
                            <table className="w-full">
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
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttentionComponent