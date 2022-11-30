import Card from "./Card"

export default function SecondLayer(){
    return(
        <div className="mt-56 mb-24">
                <div className="text-center pt-40 mb-16">
                    <h1 className='text-6xl tracking-wide text-center font-semibold mb-8'>What's <span className=' text-blue-ribbon-500 font-semibold'>Bantu Warga</span></h1>
                    <span className='font-normal w-[550px] text-textbase text-center tracking-wider'> 
                        Aplikasi Bantu warga disini anda bisa melihat keadaan pandemi <br></br>
                        covid di Indonesia dari penyebaran covid , berita , data
                    </span>
                </div>
               <Card/>
        </div>
               
             
           

    
    )
}