export default function Navbar(){
    return(
        <div className="nav-container  bg-white-500 pt-4 pb-4 pl-28 sm:block gap-2">
            <nav className='navigation flex justify-between bg-white-500 '>
                <div className='nav-logo flex flex-col-3 justify-start p-0'>
                    <img className='mr-[150px]' src="/icons/bantu.svg" alt="bantu" />
                    <ul className='nav-items flex gap-12 font-medium text-base mt-5 mr-[300px]'>
                    <li className="text-blue-ribbon-500">Home</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                    </ul>
                </div>
                <div className="btn pr-24">
                <button className='bg-blue-ribbon-500 text-white-50 rounded-lg h-12 mt-1 font-medium w-[130px] text-base'>See demo</button>

                </div>
                
            </nav>
          </div>

    )
}