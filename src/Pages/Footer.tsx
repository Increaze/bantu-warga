import {  AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialFacebook } from 'react-icons/ti'

export default function Footer(){
    return(
        <div className='bg-blue-ribbon-500 pt-10 pb-6'>
             <div className='flex justify-between px-36 pt-8 '>
                <div className='h-72 flex flex-col gap-12'>
                    <img className='w-[150px]' src="/icons/footer-logo.svg" alt="bantu" />
                    <span className='text-white-50 font-normal text-xl w-[400px] tracking-wider'>
                        Kami adalah  aplikasi pelayanan
                        masyarakat dalam kasus kesehatan
                        terutama covid 19
                    </span>
                </div>

                <div className='flex flex-row gap-20 pt-8'>
                    <div className='text-white-50 flex flex-col gap-4'>
                        <p className='font-bold text-xl '>Tentang Kami</p>
                        <span className='font-normal text-xl'>Tentang Kami</span>
                        <span className='font-normal text-xl'>Fitur</span>
                    </div>
                
                    <div className='text-white-50 flex flex-col gap-4'>
                        <p className='font-bold text-xl text-white-50'>Perusahaan</p>
                    
                            <span className='font-normal text-xl'>Tim Kami</span>
                            <span className='font-normal text-xl'>Mitra Kami</span>
                    
                    </div>
                    <div className='text-white-50 flex flex-col gap-4'>
                            <p className='font-bold text-xl '>Dukungan</p>
                            <span className='font-normal text-xl'>Pusat Dukungan</span>
                            <span className='font-normal text-xl'>Hubungi Kami</span>
                    </div>
                
                </div>
            </div>

            <div className='flex justify-between px-36 py-2 gap-10'>
                <div className="flex flex-row gap-16 ">
                                
                                <TiSocialFacebook
                                size={40}
                                color={"white"}/>
                                <AiOutlineTwitter
                                    size={40}
                                    color={"white"}
                                /> 
                                <AiOutlineInstagram 
                                    size={40}
                                    color={"white"}
                                    />              
                </div>
                <div>
                    <span className='text-white-50 font-normal text-[22px]'>copyright BantuWarga. All right reserved</span>
                </div>
                     
        </div>
        </div>
       

       
    )
}