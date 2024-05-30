const CoupleComponent = () => {
    return (
        <div className="bg-white h-full bg-cover bg-no-repeat w-full">
            <div className="py-4 w-full flex justify-center items-center">
                <div className="md:w-1/2 w-5/6 text-center flex justify-center flex-col gap-3">
                    <h1 className="text-6xl font-bold">Shalom</h1>
                    <p className="font-semibold">Tuhan membuat segala sesuatu indah pada waktuNya. Indah saat DIA mempertemukan. Indah saat DIA menumbuhkan kasih. Dan indah saat DIA mempersatukan dalam pernikahan Kudus yang akan diselenggarakan pada :</p>
                    <h1 className="text-sky-700 font-bold text-3xl">Jum&apos;at, 21 Juni 2024</h1>
                    <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-3">
                        <div className="w-full h-[300px] rounded flex flex-col justify-center">
                            <div className="w-full h-[100px] bg-white mt-2">
                                <h1 className="font-semibold text-3xl mb-2">Kezia Meirenanta Kusuma Wardhani, S.E</h1>
                                <p className="font-semibold">
                                    putri dari Bapak Bandianto & Ibu Tri Rusnaningsih <br />
                                    Putri pertama dari tiga bersaudara </p>
                            </div>
                        </div>

                        <div className="w-full h-[300px] rounded flex flex-col justify-center">
                            <div className="w-full h-[100px] bg-white mt-2 flex flex-col justify-center">
                                <h1 className="font-semibold text-3xl mb-2">Kristian Ardiansyah</h1>
                                <p className="font-semibold">
                                    putra dari Bapak Sudirman & Ibu Dewi Angrudatin <br />
                                    Putra ke 4 dari empat bersaudara</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoupleComponent