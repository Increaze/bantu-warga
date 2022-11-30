export default function Hero(){
    return(
        <div className="hero-content flex justify-between ml-28 bg-mercury-500 ">
              <div className="text block ">
                <div className="relative mt-48">
                  <h1 className='text-5xl w-[500px] tracking-widest font-semibold leading-relaxed'><span className=' text-blue-ribbon-500'>Saling </span> 
                    bantu sesama <span className='text-blue-ribbon-500'>Warga </span>
                    <img className='absolute inset-x-96 inset-y-4 sm:hidden' src='/icons/hands.svg'/>
                  </h1>
                </div>
                <div className='w-[550px] mt-4'>
                  <span className='font-light text-base'>Aplikasi Bantu warga merupakan aplikasi berbasis mobile
                    dengan konsep kesehatan yang berkaitan dengan keadaan covid sekarang
                  </span>
                </div>
                <div className="input mt-8 relative ">
                  <input className='p-4 w-[400px] border-gray-400 shadow border-0 rounded-lg ' type="text" placeholder='Email address...'/>
                  <img className='absolute bottom-[15px] left-[350px] p-2 bg-blue-ribbon-500 rounded w-10' src="/icons/arrow.svg" alt="arrow-icon" />
                </div>
              </div>
                <div className="img relative flex-1 p-0">
                  <img className="absolute top-1 right-[180px] mr-8 " src="/icons/vector-one.svg" alt="vector" />
                  <img className="absolute object-fit right-4" src="/icons/vector-two.svg" alt="vector" />
                </div>
            </div>
    )
}