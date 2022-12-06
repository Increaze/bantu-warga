import { Card } from "../Components/Card";
import { Button } from "../Components/Button";

const card = (image: any, title: string, text: string) => ({
  image,
  title,
  text,
});

const data = [
  card(
    "/icons/drop.svg",
    "Donor darah",
    "Cek ketersediaan donor darah atau mau donor darah"
  ),
  card(
    "/icons/box.svg",
    "Donasi uang",
    "Bantu teman - teman kita yang sedang mengalami kesulitan finansial"
  ),
  card(
    "/icons/stethoscope.svg",
    "Donasi alat medis",
    "Bantu para nakes yang sedang berjuang melawan pandemi"
  ),
  card(
    "/icons/pills.svg",
    "Donasi Vitamin",
    "Bantu teman - teman kita yang sedang mengalami sakit"
  ),
  card(
    "/icons/syringe.svg",
    "Cek vaksinasi",
    "Cek ketersediaan vaksin dan lokasi vaksinasi di dekat lokasi anda"
  ),
  card(
    "/icons/truck.svg",
    "Ketersediaan ambulance",
    "Cek ketersediaan ambulan dan lokasi rumah sakit yang menyediakan"
  ),
];
export default function SecondLayer() {
  return (
    <div className="bg-mercury-300 py-8">
      <div className="text-center grid gap-4 text-tundora-500">
        <h1 className="text-6xl tracking-wide text-center font-semibold">
          What's{" "}
          <span className=" text-blue-ribbon-500 font-semibold">
            Bantu Warga
          </span>
        </h1>
        <p className="font-normal text-textbase text-center tracking-wider">
          Aplikasi Bantu warga disini anda bisa melihat keadaan pandemi{" "}
          <br></br>
          covid di Indonesia dari penyebaran covid , berita , data
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 text-center mt-16 mb-8 px-32">
        {data.map((item) => (
          <Card cardItem={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button text={"Load More"} />
      </div>
    </div>
  );
}
