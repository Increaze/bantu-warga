export default function Hero() {
  return (
    <div className="hero-content block lg:flex justify-between p-2 lg:pl-28">
      <div className="mt-32 lg:mt-56 lg:w-[50%] ">
        <div className="relative ">
          <h1 className="text-[35px] items-center lg:text-left lg:text-5xl tracking-wide font-semibold leading-relaxed lg:pr-20  ">
            <span className="text-blue-ribbon-500">Saling </span>
            bantu sesama <span className="text-blue-ribbon-500">Warga </span>
            {/* <img
              className="lg:absolute inset-x-96 inset-y-4"
              src="/icons/hands.svg"
            /> */}
          </h1>
        </div>
        <div className="mt-4 lg:pr-10">
          <span className="font-light text-left lg:text-base text-tundora-500">
            Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan
            konsep kesehatan yang berkaitan dengan keadaan covid sekarang
          </span>
        </div>
        <div className="input mt-8 relative ">
          <input
            className="p-4 w-[80%] lg:w-[60%] border-gray-400 shadow border-0 rounded-lg "
            type="text"
            placeholder="Email address..."
          />
          <img 
          // className="bg-blue-ribbon rounded-[5px] h-full px-4 py- text-white"
            className="relative inline right-[52px] p-2 bg-blue-ribbon-500 rounded w-10"
            src="/icons/arrow.svg"
            alt="arrow-icon"
          />
        </div>
      </div>
      <div className="mt-16">
        <img className="hidden lg:block" src="/icons/Group 385.svg" alt="vector" />
      </div>
    </div>
  );
}
