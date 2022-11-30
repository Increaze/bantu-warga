import Card from "./Card"

export default function SecondLayer(){
    return(
        <div className="my-40">
                <div className="text-center pt-40 mb-8">
                    <h1 className='text-5xl tracking-widest text-center font-semibold leading-10 mb-8'>What's <span className=' text-blue-ribbon-500 font-semibold'>Bantu Warga</span></h1>
                    <span className='font-normal w-[550px] text-sm text-center tracking-wider'> 
                        Aplikasi Bantu warga disini anda bisa melihat keadaan pandemi <br></br>
                        covid di Indonesia dari penyebaran covid , berita , data
                    </span>
                </div>
               <Card/>
        </div>
               
             
           

    
    )
}