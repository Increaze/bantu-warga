export const TextInfo = ({ item: { image, title, text } }: {item: {image:string, title:string, text:string} }) => {
  return (
    <div className="grid mb-6 justify-between grid-cols-12">
      <div className="w-[37px] col-span-2 lg:col-span-1">
        <img className="w-[100%]" src={image} alt="people-icon" />
      </div>
      <div className="block col-span-10 lg:col-span-9">
        <h5 className="font-semibold text-xl pb-2">{title}</h5>
        <p className="p-0 font-normal text-tundora-500">{text}</p>
      </div>
    </div>
  );
};
