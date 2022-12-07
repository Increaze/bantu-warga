export const GetTheApp = () => {
  return (
    <div className="flex gap-1 px-2 lg:px-32 items-center ">
      <img
        className="h-[600px] rounded-full hidden lg:block"
        src="/icons/Mask Group.svg"
        alt="phoneImage"
      />
      <div className="">
        <div className="mb-4">
          <p className="text-blue-ribbon-500 font-semibold text-base border-l-4 border-blue-ribbon-500 pl-4">
            Download Now
          </p>
        </div>
        <h1 className="text-[52px] tracking-tighter font-semibold leading-10 mb-4">
          Get{" "}
          <span className="text-blue-ribbon-500 font-semibold ">the app</span>
        </h1>
        <div className="mb-8">
          <span className="font-normal text-base tracking-wide">
            Aplikasi kami tersedia di play store , app store , anda dapat
            langsung mendownloadnya secara gratis dan nikmati fitur aplikasi
            yang sudah kami sediakan
          </span>
        </div>
        <div className="grid grid-cols-2">
          <img className="w-[100%]" src="/icons/google.svg" alt="Google" />
          <img className="w-[100%]" src="/icons/app-store.svg" alt="Google" />
        </div>
      </div>
    </div>
  );
};
