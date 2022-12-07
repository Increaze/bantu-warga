import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  return (
    <div className=" bg-blue-ribbon-500 px-8 py-4 ">
      {/* pt-10 pb-6 */}
      <div className="block lg:flex lg:justify-between lg:px-36 lg:pt-8 ">
        <div className="block lg:h-72 lg:flex flex-col gap-12">
          <img
            className="pb-4 lg:w-[150px]"
            src="/icons/footer-logo.svg"
            alt="bantu"
          />
          <span className="text-white-50 font-normal text-xl w-[400px] tracking-wider">
            Kami adalah aplikasi pelayanan masyarakat dalam kasus kesehatan
            terutama covid 19
          </span>
        </div>

        <div className="gap-8 lg:flex lg:flex-row lg:gap-20 pt-8">
          <div className="text-white-50 flex flex-col gap-2 pb-2 lg:gap-4 ">
            <p className="font-bold text-xl ">Tentang Kami</p>
            <span className="font-normal text-base lg:text-xl">
              Tentang Kami
            </span>
            <span className="font-normal text-base lg:text-xl">Fitur</span>
          </div>

          <div className="text-white-50 flex flex-col gap-2 pb-2 lg:gap-4">
            <p className="font-bold text-xl">Perusahaan</p>
            <span className="font-normal text-base lg:text-xl">Tim Kami</span>
            <span className="font-normal text-base lg:text-xl">Mitra Kami</span>
          </div>
          <div className="text-white-50 flex flex-col gap-2 pb-2 lg:gap-4">
            <p className="font-bold text-xl ">Dukungan</p>
            <span className="font-normal text-base lg:text-xl">
              Pusat Dukungan
            </span>
            <span className="font-normal text-base lg:text-xl">
              Hubungi Kami
            </span>
          </div>
        </div>
      </div>

      <div className="block pt-4 px-0 lg:flex justify-between lg:px-36 lg:py-2 lg:gap-10">
        <div className="flex flex-row gap-6 pb-2 lg:gap-16 ">
          <TiSocialFacebook size={40} color={"white"} />
          <AiOutlineTwitter size={40} color={"white"} />
          <AiOutlineInstagram size={40} color={"white"} />
        </div>
        <div>
          <span className="text-white-50 text-base lg:font-normal lg:text-[22px]">
            copyright BantuWarga. All right reserved
          </span>
        </div>
      </div>
    </div>
  );
}
