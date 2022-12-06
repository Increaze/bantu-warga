import { Button } from "../Components/Button";
import { TextInfo } from "../Components/TextInfo";

export default function Covid() {
  const textInfo = (image: any, title: string, text: string) => ({
    image,
    title,
    text,
  });

  const data = [
    textInfo(
      "/icons/clock.svg",
      " Informasi tepat waktu",
      "Informasi yang anda dapatkan selalu update oleh kami , karena kami mengutamakan informasi yang akurat dan cepat"
    ),
    textInfo(
      "/icons/people-icon.svg",
      "Informasi terpercaya",
      "Informasi yang anda temukan dan baca dapat dipercaya adanya karena kami telah berkerja sama dengan para sukarelawan kami untuk membagi informasi yang benar adanya"
    ),
    textInfo(
      "/icons/connect.svg",
      "Informasi relevan",
      "Informasi yang anda temukan dan baca dapat hanya tentang masalah kesehatan ,tips - tips ,pandemi covid ,dan sejenisnya"
    ),
  ];
  return (
    <div className="grid grid-cols-6 justify-between pl-36 pr-36 pt-6 bg-mercury-300 ">
      <div className="mt-28 col-span-4">
        <div className="mb-4">
          <p className="text-blue-ribbon-500 font-semibold text-base border-l-4 border-blue-ribbon-500 pl-4">
            Information
          </p>
          <h1 className="text-[52px] w-[850px] tracking-widest font-semibold leading-10 pb-4 pt-4">
            Covid{" "}
            <span className="text-blue-ribbon-500  font-semibold ">
              Information
            </span>
          </h1>
        </div>
        <div className="grid gap-6 ">
          {data.map((item) => (
            <TextInfo item={item} />
          ))}
        </div>
        <div className="flex ml-14">
          <Button text={"See demo"} />
        </div>
      </div>
      <div className="w-[500px] relative inline-flex items-center justify-center  p-0 mt-28 col-span-2">
        <img
          className="h-[300px] absolute right-[108px] mt-20"
          src="/icons/map.svg"
          alt="map"
        />
        <img
          className="h-[550px]  left-0 absolute pt-14"
          src="/icons/map-text.svg"
          alt="map"
        />
      </div>
    </div>
  );
}
