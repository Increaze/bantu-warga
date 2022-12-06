export default function Hero() {
  return (
    <div className="hero-content flex justify-between pl-28 bg-mercury-300 ">
      <div className="text block ">
        <div className="relative mt-48">
          <h1 className="text-5xl w-[500px] tracking-widest font-semibold leading-relaxed">
            <span className=" text-blue-ribbon-500">Saling </span>
            bantu sesama <span className="text-blue-ribbon-500">Warga </span>
            <img
              className="absolute inset-x-96 inset-y-4 sm:hidden"
              src="/icons/hands.svg"
            />
          </h1>
        </div>
        <div className="w-[550px] mt-4">
          <span className="font-light text-base text-tundora-500">
            Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan
            konsep kesehatan yang berkaitan dengan keadaan covid sekarang
          </span>
        </div>
        <div className="input mt-8 relative ">
          <input
            className="p-4 w-[400px] border-gray-400 shadow border-0 rounded-lg "
            type="text"
            placeholder="Email address..."
          />
          <img
            className="relative inline right-[52px] p-2 bg-blue-ribbon-500 rounded w-10"
            src="/icons/arrow.svg"
            alt="arrow-icon"
          />
        </div>
      </div>
      <div className="img">
        <img className="" src="/icons/Group 385.svg" alt="vector" />
      </div>
    </div>
  );
}
