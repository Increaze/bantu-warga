import { useState } from "react";

export default function Ham() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-gray-400 pt-8">
      <a href="/">
        <img className="relative top-0 right-0 pr-48" src="/icons/bantu.svg" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-blue-ribbon-500"></span>
            <span className="block h-0.5 w-8  bg-blue-ribbon-500"></span>
            <span className="block h-0.5 w-8  bg-blue-ribbon-500"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 pt-10"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
               
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[150px] mt-8">
              <li className="border-0 border-gray-400 pt-8 hover:text-blue-ribbon-500 ">
                <a href="/about">Home</a>
              </li>
              <li className="border-0 border-gray-400 hover:text-blue-ribbon-500">
                <a href="/portfolio">Pricing</a>
              </li>
              <li className="border-0 border-gray-400 hover:text-blue-ribbon-500 ">
                <a href="/contact">About</a>
              </li>
              <li className="border-0 border-gray-400 hover:text-blue-ribbon-500 ">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

      
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        // height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
    </style>
    </div>
  );
}