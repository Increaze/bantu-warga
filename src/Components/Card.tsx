export const Card = ({ cardItem: { image, title, text } }) => {
  return (
    <div className="flex flex-col bg-white-50  border-transparent rounded-lg  p-7 hover:shadow">
      <img className="h-10 m-4" src={image} alt="" />
      <h5 className="text-center text-xl font-semibold  mb-4">{title}</h5>
      <p className="font-normal tracking-wide text-center text-tundora-500 text-base">
        {text}
      </p>
    </div>
  );
};
