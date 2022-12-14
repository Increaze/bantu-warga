import { GiHamburgerMenu } from 'react-icons/gi';
import Ham from '../Components/ham';

export default function Navbar() {
  return (
    <div className="bg-white-500 flex  py-4 sm:block gap-2">
      <nav className="hidden lg:flex justify-between bg-white-500 items-center">
        <div className="flex lg:w-[50%] justify-between">
          <img src="/icons/bantu.svg" alt="bantu" />
          <ul className="text-storm-dust-500 flex font-medium text-base items-center w-[60%] justify-between">
            <li className="text-blue-ribbon-500">Home</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="btn">
          <button className="bg-blue-ribbon-500 text-white-50 rounded-lg font-medium text-base px-[28px] py-[13px] leading-6">
            See demo
          </button>
        </div>
        
      </nav>
      <div className="absolute top-0 right-0 px-8 lg:hidden">
        <Ham/>
               {/* <GiHamburgerMenu className='flex justify-end lg:hidden' 
                  size={'30px'}
                /> */}
      </div>
     
    </div>
  );
}
