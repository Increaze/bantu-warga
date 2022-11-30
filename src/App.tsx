import Covid from './Covid'
import Footer from './Footer'
import Form from './Form'
import Hero from './Hero'
import Navbar from './Navbar'
import SecondLayer from './SecondLayer'

function App() {
  return (
      <div className='wrapper bg-mercury-500'>
        <Navbar/>
        <Hero/>
        <SecondLayer/>

        <div className="flex justify-between pl-36 gap-2 pr-52  ">
            <div className="h-[500px] w-[500px] relative flex rounded-full ring-gray-300 ring-8 bg-blue-ribbon-500">
              <img className='h-[500px] absolute left-[104px] rounded-xl bottom-10' src="/icons/phone-img.svg" alt="phoneImage" />
            </div>
            <div className='w-[450px] mt-20 '>
              <div className='pb-8'>
                <span className='text-blue-ribbon-500 relative ml-4 font-semibold text-base '>
                    Download now
                    <img className=' absolute bottom-0 mx-0' src="/icons/slash.svg" alt="slash" />
                </span>
              </div>
              <h1 className='text-[52px] tracking-widest font-semibold leading-10 pb-8'>
                Get <span className='text-blue-ribbon-500 font-semibold '>the app</span>
              </h1>
              <div className='w-[500px]'>
                  <span className='font-normal text-base tracking-wide'>
                      Aplikasi kami tersedia di play store , app store , 
                      anda dapat langsung mendownloadnya secara gratis dan
                        nikmati fitur aplikasi yang sudah kami sediakan
                  </span>
              </div>
              <div className='flex mt-8'>
                <img src="/icons/google.svg" alt="Google"/>
                <img className='ml-4' src="/icons/google.svg" alt="Google"/>
              </div>
            </div>
        </div>

        <Covid/>
        <Form/>
        <Footer/>
      </div>

      
          

  )
}

export default App
