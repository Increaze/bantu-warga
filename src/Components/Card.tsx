export const Card = ({ cardItem: { image, title, text } }: { cardItem: {image:string, title:string, text:string} }) => {
  return (
    <div className="flex flex-col shadow-sm hover:shadow bg-white-50 lg:hover:shadow lg:shadow-sm rounded-lg lg:p-7 ">
      <img className="h-10 m-4" src={image} alt="image" />
      <h5 className="text-center text-xl font-semibold  mb-4">{title}</h5>
      <p className="font-normal tracking-wide text-center text-tundora-500 text-base">
        {text}
      </p>
    </div>
  );
};
