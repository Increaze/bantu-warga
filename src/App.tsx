import Covid from './Covid'
import Footer from './Footer'
import Form from './Form'
import Hero from './Hero'
import Navbar from './Navbar'
import SecondLayer from './SecondLayer'

function App() {
  return (
      <div className='wrapper bg-mercury-300'>
        <Navbar/>
        <Hero/>
        <SecondLayer/>

        <div className="flex justify-between pl-36 gap-4 pr-72">
          <img className=' h-[600px] rounded-full' src="/icons/Mask Group.svg" alt="phoneImage" />

          {/* BORDER YET TO BE FIXED 
           <div className="h-[300px] w-[300px] absolute bottom-100 pt-10 flex rounded-full ring-gray-300 ring-8 bg-blue-ribbon-500">
          </div> */}
            
            <div className='w-[550px] mt-48 '>
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
