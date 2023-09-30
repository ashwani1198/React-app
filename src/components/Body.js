import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //STATES VARIABLES

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.8542626&lng=77.8880002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <h1>Looks like you're offline !!please check your network connection</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen w-full">
      <div className="flex justify-center space-x-3 p-3">
        <div className="">
          <input
            type="text"
            className="border border-orange-400 outline-none rounded-full w-[500px] px-4 py-3"
            placeholder="Search for restaurants and Food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);

              const filteredRestaurantBySearchText = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurantBySearchText);
            }}
          ></input>
          <button
            className="ml-4 px-4 py-3 bg-[#F7CEA5] text-[#0A0101] rounded-lg font-bold"
            onClick={() => {
              //filter the restaurant card and update the UI
              const filteredRestaurantBySearchText = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(filteredRestaurantBySearchText);
            }}
          >
            {"🔍  Search"}
          </button>
        </div>
        <button
          className=" px-4 py-3 bg-green-600  rounded-lg text-white font-bold"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated restaurants 🔥
        </button>
        <div className="px-4 py-3 flex items-center">
          <label>Username : </label>
          <input
            type="text"
            className="border border-black ml-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-3 px-[120px] py-[20px]">
        {filteredRestaurant?.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
              <RestaurantCard resData={restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
