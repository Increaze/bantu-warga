export default function Navbar(){
    return(
        <div className="nav-container h-20 bg-white-500  mt-4 pl-28 sm:block gap-2">
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
                <div className="btn pr-20">
                <button className='bg-blue-ribbon-500 text-white-50 rounded-lg h-11 mt-1 font-medium w-[120px] text-base'>See demo</button>

                </div>
                
            </nav>
          </div>

    )
}