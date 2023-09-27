import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //STATES VARIABLES

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
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
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              //filter the restaurant card and update the UI
              const filteredRestaurantBySearchText = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(filteredRestaurantBySearchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
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
