import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = props.resData;
  return (
    <div className="  p-3 rounded-md bg-[#f0f0f0] shadow-gray-400 shadow-md hover:scale-95 transition-all delay-300">
      <img
        className="res-logo rounded-sm"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 capitalize text-gray-700">{name}</h3>
      <h4 className="font-semibold">{"⭐  " + avgRating}</h4>
      <h4 className="break-words tracking-wider">{cuisines.join(",")}</h4>
      <h4 className="font-medium">{"🚚  " + sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
