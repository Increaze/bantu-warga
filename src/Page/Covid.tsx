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
    <div className="grid grid-cols-1 lg:grid-cols-6 justify-between p-2 lg:px-36 pt-6">
      <div className="mt-28 lg:col-span-4">
        <div className="mb-4">
          <p className="text-blue-ribbon-500 font-semibold text-base border-l-4 border-blue-ribbon-500 pl-4 ">
            Information
          </p>
          <h1 className="text-[52px] tracking-tighter sm:tracking-normal font-semibold lg:leading-8 sm:leading-4 pb-4 pt-4">
            Covid{" "}
            <span className="text-blue-ribbon-500 font-semibold ">
              Information
            </span>
          </h1>
        </div>
        <div className="grid gap-4 ">
          {data.map((item) => (
            <TextInfo item={item} />
          ))}
        </div>
        <div className="flex ml-14 mb-10">
          <Button text={"See demo"} />
        </div>
      </div>
      <div className="lg:pt-32 lg:col-span-2">
        <img
          className="lg:block"
          src="/icons/Group 386.svg"
          alt="group"
        />
      
      </div>
    </div>
  );
}
