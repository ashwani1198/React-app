import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showItemCategoryIndex, setShowingItemCategoryIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  const handleShowIndex = (index) => {
    if (index === showItemCategoryIndex) {
      setShowingItemCategoryIndex(null);
    } else {
      setShowingItemCategoryIndex(index);
    }
  };

  if (resInfo === null) return <Shimmer></Shimmer>;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="text-lg font-semibold">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {category.map((c, index) => (
        //Controlled Component

        <RestaurantCategory
          data={c?.card?.card}
          key={"index" + index}
          showItems={index === showItemCategoryIndex ? true : false}
          setShowIndex={() => handleShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
