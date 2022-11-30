export default function Covid(){
    return(
        <div className="flex justify-between ml-36 mr-36 md:mt-6 ">
            <div className='w-[475px] mt-28 '>
                <div className='mb-4'>
                        <span className='text-blue-ribbon-500 font-semibold text-base relative ml-4'>
                            Information
                            <img className=' absolute bottom-0 mx-0 ' src="/icons/slash.svg" alt="slash" />
                        </span>
                        <h1 className='text-[52px] w-[850px] tracking-widest font-semibold leading-10 pb-4 pt-4'>
                            Covid <span className='text-blue-ribbon-500  font-semibold '>Information</span>
                        </h1>
                </div>

                <div className='w-[600px] flex mb-6'>
                        <div className="pr-4">
                            <img className="h-6 w-16 pr-2 mt-1" src="/icons/clock.svg" alt="clock" />
                        </div>
                        <div>
                            <h5 className="font-semibold text-xl pb-2">Informasi tepat waktu</h5>
                            <span className='font-normal text-base'>
                                Informasi yang anda dapatkan selalu update oleh kami , karena 
                                kami mengutamakan informasi yang akurat dan cepat 
                            </span>
                        </div>
                    </div>

                    <div className='w-[600px] flex mb-6 '>
                        <div className="pr-7">
                            <img className="h-8 w-16 " src="/icons/people-icon.svg" alt="people-icon"/>
                        </div>
                        <div className="block">
                            <h5 className="font-semibold text-xl pb-2">Informasi terpercaya</h5>
                            <span className='p-0 font-normal text-base w-[400px]'>
                                Informasi yang anda temukan dan baca dapat dipercaya adanya 
                                karena kami telah berkerja sama dengan para sukarelawan kami
                                untuk membagi informasi yang benar adanya
                            </span>
                        </div>
                    </div>
                    
                    <div className='w-[600px] flex mb-6 '>
                        <div className="pr-4">
                            <img className="h-6 w-16" src="/icons/connect.svg" alt="connect"/>
                        </div>
                        <div>
                            <h5 className="font-semibold text-xl pb-2">Informasi relevan</h5>
                            <span className='font-normal text-base'>
                                Informasi yang anda temukan dan baca dapat hanya tentang 
                                masalah kesehatan ,tips - tips ,pandemi covid ,dan sejenisnya
                            </span>
                        </div>
                    </div>
                    <button className='bg-blue-ribbon-500 text-white-500 rounded-lg mt-1 ml-12 font-normal w-[120px] h-10 text-sm'>
                    See demo
        </button>
            </div> 
            <div className="w-[500px] relative inline-flex items-center justify-center  p-0 mt-28">
                <img className='h-[300px] absolute right-[108px] mt-20' src="/icons/map.svg" alt="map" />
                <img className='h-[550px]  left-0 absolute pt-14' src="/icons/map-text.svg" alt="map" />
            </div>
    </div>
    )
}