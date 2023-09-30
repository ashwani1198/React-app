import ItemCardList from "./ItemCardList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-6/12 bg-[#FFFFFF] mx-auto my-3  p-3 shadow-md cursor-pointer"
      >
        <div className=" flex justify-between cursor-pointer " onClick={handleClick}>
          <h1 className="font-bold text-lg text-[#3E4152">{`${data.title} (${data.itemCards.length})`}</h1>
          <button className="">⬇️</button>
        </div>
        {showItems && <ItemCardList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
