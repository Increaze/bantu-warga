export default function Hero() {
  return (
    <div className="hero-content flex justify-between p-2 lg:pl-28">
      <div className="text block ">
        <div className="relative mt-48">
          <h1 className=" text-3xl lg:text-5xl tracking-widest font-semibold leading-relaxed">
            <span className=" text-blue-ribbon-500">Saling </span>
            bantu sesama <span className="text-blue-ribbon-500">Warga </span>
            <img
              className="hidden lg:absolute inset-x-96 inset-y-4 sm:hidden"
              src="/icons/hands.svg"
            />
          </h1>
        </div>
        <div className="mt-4 ">
          <span className="font-light text-base text-tundora-500">
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
      <div className="flex">
        <img className="hidden lg:block" src="/icons/Group 385.svg" alt="vector" />
      </div>
    </div>
  );
}
