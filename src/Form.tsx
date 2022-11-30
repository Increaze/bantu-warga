import React from "react";
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail , AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialFacebook } from 'react-icons/ti'

export default function Form(){
    return(
        <div className="mx-56 mt-24 bg-white-50 py-16 px-12 rounded-xl shadow-xl mb-20">
            <h1 className='text-3xl text-blue-ribbon-500  tracking-widest text-center font-semibold mb-4'>Contact</h1>
             <div className="md:container px-10 py-4 ">
            <form>
                    <span className="block font-medium mb-4 tracking-wider text-xl">
                        Leave us a message
                    </span>
                    <div className="flex justify-between gap-8">
                        <div className="flex flex-col gap-5">
                            <input className='px-10 py-2 mt-2 w-[400px] border-gray-900 shadow rounded focus:outline-none focus:ring-1 mb-2'
                            type="text" placeholder='your name'/>
                            <input className='px-10 py-2 mt-2 w-[400px] border-gray-900 shadow rounded focus:outline-none focus:ring-1 mb-2'
                            type="text" placeholder='Email address'/>
                            <textarea className='px-10 py-2 mt-2 w-[400px] h-24 border-gray-900 shadow rounded focus:outline-none focus:ring-1 mb-2' 
                            placeholder='Your message'/>
                            <button className="bg-blue-ribbon-500 px-10 py-2 mt-2 w-[400px] rounded-lg text-white-50"> Send </button>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div  className="flex gap-3">
                                <CiLocationOn size={20}/>
                                <span className="text-sm w-[250px]">
                                Infomation technologies building,
                                Kudus, Jawa tengah Indonesian
                                </span>
                            </div>
                            <div  className="flex gap-3 ">
                                <BsTelephone/>
                                <span className="text-sm ">+021213414115151</span>
                            </div>
                            <div className="flex gap-3">
                                <AiOutlineMail/>
                                <span className="text-sm">hello1234@info.com</span>
                            </div>

                            <div className="flex flex-row gap-4">
                                <AiFillYoutube/>
                                <AiOutlineInstagram/>
                                <TiSocialFacebook/>
                                <AiOutlineTwitter/>
                            </div>

                            <div className="">
                                <img src="/icons/map-form.svg" alt="map" />
                            </div>
                        </div>
                    </div>
            </form>
        </div>
        </div>
    )
}
  